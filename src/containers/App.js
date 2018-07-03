import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import { setSearchField, requestRobots } from '../actions';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

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

class App extends Component {


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
					<Header />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
