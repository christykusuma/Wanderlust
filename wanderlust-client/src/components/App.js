import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../css/app.css';

import Header from './Header';
import GoogleMapSearch from '../containers/GoogleMapSearch';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Activities from './Activities';

// Holds all the other components
class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render () {
		return ( 
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/search" component={GoogleMapSearch} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/activities" component={Activities} />
				</div>
			</BrowserRouter>
		);
	}
};

export default connect(null, actions)(App);

