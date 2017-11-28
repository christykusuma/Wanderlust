import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchDetail extends Component {

    renderBusinesses() {
        return this.props.search.map((business) => {
            return (
                <div key={business.id} >
                    <p>{business.name}</p>
                </div>
            );
        });
    }

    render() {
        if (!this.props.search) {
            return <h4></h4>
        }
        return (
            <div>
                {this.renderBusinesses()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        search: state.activeSearch
    };
}

export default connect(mapStateToProps )(SearchDetail);
