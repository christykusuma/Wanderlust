import React, { Component } from 'react'

import CityList from '../containers/city-list';
import CityDetail from '../containers/city-detail';

class Dashboard extends Component {

	render() {

		return (
			<div>
				<CityList />
				<CityDetail />
			</div>
		);
	}
}

export default Dashboard;

