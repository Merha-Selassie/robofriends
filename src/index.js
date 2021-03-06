import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import App from './containers/App';
import './index.css';
import { requestRobot, requestRobots, searchRobots } from './reducers';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots, requestRobot })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
		
	, document.getElementById('root'));
registerServiceWorker();
