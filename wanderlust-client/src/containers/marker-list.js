import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import action functions
import { fetchMarkers, updateMarker, deleteMarker } from '../actions/index';

import { bindActionCreators } from 'redux';

class MarkerList extends Component {
	constructor(props) {
        super(props)
        
    // Bind function
    this.dist = this.dist.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchMarkers();
    }

    // Function to calculate distance between markers
    dist = ( city, marker ) => {
        return Math.sqrt(Math.pow(city.lat - marker.latLng.lat, 2) + Math.pow(city.lng - marker.latLng.lng, 2))
      }

    renderMarkers() {
        return this.props.markers.sort((a,b) => this.dist( this.props.latLng, a) - this.dist( this.props.latLng, b)).map((marker) => {
            return (
                <div className="card marker-list" key={marker.name}>
                    <div className="card-content">
                        <span className="card-title">{marker.name}</span>
                    </div>
                    <div className="card-action">
                        <form className="marker-form" onSubmit={(event) => this.props.updateMarker(marker)}>
                            <button>DONE</button>
                        </form>
                        <form className="marker-form" onSubmit={(event) => this.props.deleteMarker(marker)}>
                            <button>DELETE</button>
                        </form>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
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
        updateMarker,
        deleteMarker
    }, dispatch);
}

// Promote MarkerList from a component to a container - it needs to know about this new dispatch method, selectCity. Make it available as a prop.
// export default connect(mapStateToProps, mapDispatchToProps)(CityList);
export default connect(mapStateToProps, mapDispatchToProps)(MarkerList);