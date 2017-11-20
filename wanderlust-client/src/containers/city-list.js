import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import selectCity function
import { selectCity } from '../actions/index';
import { bindActionCreators } from 'redux';

class CityList extends Component {
    renderList() {
        return this.props.cities.map((city) => {
            return (
                <li 
                key={city.name}
                onClick={() => this.props.selectCity(city)}
                >
                    {city.name}
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h2>List of cities:</h2>
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

// Changes reducer states to props for react to use
function mapStateToProps(state) {
    return {
        cities: state.cities
    };
}

// Anything returned from this function will end up as props on the CityList container
function mapDispatchToProps(dispatch) {
    // Whenever selectCity is called, result should be passed to all of our reducers
    return bindActionCreators( {selectCity: selectCity }, dispatch);
}

// Promote CityList from a component to a container - it needs to know about this new dispatch method, selectCity. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(CityList);