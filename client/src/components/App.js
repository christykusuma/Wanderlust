import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../css/app.css';

import Header from './Header';
import Explore from './Explore';
import Landing from './Landing';
import Activities from './Activities';
import MarkerSearch from './MarkerSearch';

import '../css/app.css';

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
					<Route exact path="/search" component={Explore} />
					<Route exact path="/activities" component={Activities} />
					<Route exact path="/markers/:id" component={MarkerSearch}/>
				</div>
			</BrowserRouter>
		);
	}
};

export default connect(null, actions)(App);

