import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../Actions';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';
import Scroll from './Scroll';
import SearchBox from './SearchBox';



const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class Home extends Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}


	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		//Ternary 
		return isPending ?
			<h1 className="tc fl w-100 pv7">Loading</h1> : 
			(
				<div className='tc'>
					{/* <Header /> */}
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>	
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

