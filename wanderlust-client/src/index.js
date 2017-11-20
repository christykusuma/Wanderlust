// Import materialize.css
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

// Glue between react and redux (reaches into store)
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// middleware that allows you to write action creators that return a function instead of an action
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Store contains all the states
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
); 