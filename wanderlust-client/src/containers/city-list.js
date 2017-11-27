import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import selectCity function and fetchCity function
import { selectCity, fetchCities, deleteCity } from '../actions/index';

import { bindActionCreators } from 'redux';

class CityList extends Component {
    componentDidMount() {
        this.props.fetchCities();
    }

    renderCities() {
        return this.props.cities.map((city) => {
            return (
                <div className="card" 
                    key={city.name} >

                    <div className="card-content"
                    onClick={() => this.props.selectCity(city)}>
                        <span className="card-title">{city.name}</span>
                    </div>
                    <form className="card-action" onSubmit={(event) => this.props.deleteCity(city)}>
                        <button className="delete-city">DELETE</button>
                    </form>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h4>Saved cities:</h4>
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
        deleteCity
    }, dispatch);
}

// Promote CityList from a component to a container - it needs to know about this new dispatch method, selectCity. Make it available as a prop.
// export default connect(mapStateToProps, mapDispatchToProps)(CityList);
export default connect(mapStateToProps, mapDispatchToProps )(CityList);