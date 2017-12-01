import React, { Component } from 'react'

import CityList from '../containers/city-list';
import CityDetail from '../containers/city-detail';

import '../css/dashboard.css';

class Dashboard extends Component {

	render() {

		return (
			<div>
				<h3 className="page-title">Favorite Places</h3>
			<div className="dashboard">
				<div className="left-col"><CityList /></div>
				<div className="right-col">
					<CityDetail />
				</div>
				<div>
				</div>
			</div>
			</div>
		);
	}
}

export default Dashboard;

