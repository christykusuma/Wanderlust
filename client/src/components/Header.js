import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		if (this.props.auth) {
			return (
				<div>
					<li><a href ="/search">Explore</a></li>
					<li><a href ="/activities">Bookmarks</a></li>
					<li className="welcome-name">Welcome, {this.props.auth.fname} {this.props.auth.lname}.</li>
					<li><a href ="/api/logout">Logout</a></li>
				</div>
			);
		} else {
			return (
				<div>
					<li><a href ="/auth/google">Login with Google</a></li> 
				</div>
			);
		}
	}

	render() {
		console.log('user information', this.props);
		return (
			<nav>
				<div class="navbar-wrapper">
					<Link 
						to={this.props.auth ? '/search' : '/'} 
						className="left brand-logo"
					>
						Wanderlust
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