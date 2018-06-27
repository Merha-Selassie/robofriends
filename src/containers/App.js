import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => {this.setState({robots: users})});
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
		console.log(event.target.value);
	}

	render() {
		console.log('length : ' + this.state.robots.length);
		const { robots, searchField} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		//Ternary 
		return !robots.length ?
			<h1 className="tc fl w-100 pv7">Loading</h1> : 
			(
				<div className='tc'>
					<h1 className='f2'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>	
					</Scroll>
					
				</div>
			);
	}
	
}

export default App;