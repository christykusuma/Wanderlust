import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import GoogleMapSearch from '../containers/GoogleMapSearch';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Activities from './Activities';
// const SurveyNew = () => <h2>SurveyNew</h2>

// Holds all the other components
class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render () {
		return ( 
		<div className="container">
			<BrowserRouter>
				<div className="container">
					<Header />
					<Route exact path="/" component={Landing} />
					<Route exact path="/search" component={GoogleMapSearch} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/activities" component={Activities} />

				</div>
			</BrowserRouter>
		</div>
		);
	}
};

export default connect(null, actions)(App);

