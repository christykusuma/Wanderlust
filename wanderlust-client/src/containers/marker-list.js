import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import action functions
import { fetchMarkers } from '../actions/index';

import { bindActionCreators } from 'redux';

class MarkerList extends Component {
    componentDidMount() {
        this.props.fetchMarkers();
    }

    renderMarkers() {
        return this.props.markers.map((marker) => {
            return (
                <div className="card blue-grey darken-1" 
                    key={marker.name}>

                    <div className="card-content">
                        <span className="card-title">{marker.name}</span>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>List of activities:</h2>
                {this.renderMarkers()}
            </div>
        )
    }
}

// Markers has to match reducers index name
// Changes reducer states to props for react to use
function mapStateToProps(state) {
    return { markers: state.markers };
}

// Anything returned from this function will end up as props on the MarkerList container
function mapDispatchToProps(dispatch) {
    // Whenever selectCity is called, result should be passed to all of our reducers
    return bindActionCreators( {
        fetchMarkers,
    }, dispatch);
}

// Promote MarkerList from a component to a container - it needs to know about this new dispatch method, selectCity. Make it available as a prop.
// export default connect(mapStateToProps, mapDispatchToProps)(CityList);
export default connect(mapStateToProps, mapDispatchToProps )(MarkerList);