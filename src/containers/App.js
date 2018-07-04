import React, {Component} from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from '../components/Detail';
import Home from '../components/Home';
import Error from '../components/Error';

import './App.css';


class App extends Component {

	render() {

		//return <Home />

		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/detail/:id" component={Detail} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		)
		
	}
	
}

export default App;

