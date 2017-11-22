import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		if (this.props.auth) {
			return (
				<div>
					<li>Welcome, {this.props.auth.fname} {this.props.auth.lname}.</li>
					<li><a href ="/api/logout">Logout</a></li>
				</div>
			);
		}else {
			return (
				<li><a href ="/auth/google">Login with Google</a></li>
			);
		}
		
	}

	render() {
		console.log(this.props);
		return (
			<nav>
				<div className="nav-wrapper">
					<Link 
						to={this.props.auth ? '/search' : '/'} 
						className="left brand-logo"
					>
						WanderLust
					</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		); 
	}	
}

// function mapStateToProps(state) {
// 	return { auth: state.auth };
// }

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);