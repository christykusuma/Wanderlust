import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMarker } from '../actions/index';

import { bindActionCreators } from 'redux';

import '../css/markersearch.css';

class MarkerSearch extends Component {
    componentDidMount() {
        this.props.searchMarker(this.props.match.params.id);
    }

    renderBusinesses() {
        return this.props.search.map((business) => {
            console.log(business);
            return (
                <div className="search-results">
                    <div className="left-col">
                        <img className="search-img" src={`${business.image_url}`} alt="search" />
                    </div>
                    <div className="right-col">
                        <div className="search-list card"
                        key={business.id} >
                            <div className="card-content">
                                <span className="card-title"><a href={business.url} target="_blank">{business.name}</a></span>
                            </div>
                        </div>
                        <div className="search-info card">
                            <div className="card-content">
                                <ul>
                                <li> Rating: {business.rating}/5</li> 
                                <li> Phone number: {business.phone}</li>
                                <li>Price: {business.price} </li>
                                <li>Category: {business.categories[0].title}</li>
                                <li>Address: {business.location.address1}, {business.location.address2}, {business.location.city}, {business.location.country}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        if (!this.props.search) {
            return <h5></h5>
        }
        return (
            <div className="marker-search">
                <h3>Search Results</h3>
                {this.renderBusinesses()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        search: state.activeSearch,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {
        searchMarker,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerSearch);



