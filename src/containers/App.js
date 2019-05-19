import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from '../components/Error';
import Home from '../components/Home';
import './App.css';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		)
		
	}
	
}

export default App;

