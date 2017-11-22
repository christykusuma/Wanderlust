import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import selectCity function and fetchCity function
import { selectCity, fetchCities } from '../actions/index';

import { bindActionCreators } from 'redux';

class CityList extends Component {
    componentDidMount() {
        this.props.fetchCities();
    }

    renderCities() {
        return this.props.cities.map((city) => {
            return (
                <div className="card blue-grey darken-1" 
                    key={city.name} 
                    onClick={() => this.props.selectCity(city)}>

                    <div className="card-content">
                        <span className="card-title">{city.name}</span>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>List of cities:</h2>
                {this.renderCities()}
            </div>
        )
    }
}

// Cities has to match reducers index name
// Changes reducer states to props for react to use
function mapStateToProps(state) {
    return { cities: state.cities };
}

// Anything returned from this function will end up as props on the CityList container
function mapDispatchToProps(dispatch) {
    // Whenever selectCity is called, result should be passed to all of our reducers
    return bindActionCreators( {
        selectCity: selectCity,
        fetchCities,
    }, dispatch);
}

// Promote CityList from a component to a container - it needs to know about this new dispatch method, selectCity. Make it available as a prop.
// export default connect(mapStateToProps, mapDispatchToProps)(CityList);
export default connect(mapStateToProps, mapDispatchToProps )(CityList);