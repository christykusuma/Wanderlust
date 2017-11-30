import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import selectCity function and fetchCity function
import { selectCity, fetchCities, deleteCity } from '../actions/index';

import { bindActionCreators } from 'redux';
import Modal from '../components/Modal';

class CityList extends Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
      }

    componentDidMount() {
        this.props.fetchCities();
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
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
                    <div className="card-action city-buttons" >
                        <button className="update-city" onClick={this.toggleModal}>UPDATE</button>            
                        <form className="city-button" onSubmit={(event) => this.props.deleteCity(city)}>
                            <button className="delete-city">DELETE</button>
                        </form>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <Modal 
                    show={this.state.isOpen}
                    onClose={this.toggleModal}
                />
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
        selectCity,
        fetchCities,
        deleteCity
    }, dispatch);
}

// Promote CityList from a component to a container - it needs to know about this new dispatch method, selectCity. Make it available as a prop.
// export default connect(mapStateToProps, mapDispatchToProps)(CityList);
export default connect(mapStateToProps, mapDispatchToProps )(CityList);