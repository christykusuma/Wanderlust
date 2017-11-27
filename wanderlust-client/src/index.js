// Import materialize.css
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

// Glue between react and redux (reaches into store)
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

// Middleware that allows you to write action creators that return a function instead of an action
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Logger middleware
const logger = store => {
	return next => {
		return action => {
			console.log('[Middleware] Dispatching', action);
			const result = next(action);
			console.log('[Middleware] Updated State', store.getState());
			return result;
		}
	}
};

// Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store contains all the reducers
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(reduxThunk, logger)));

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
); 