// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { searchEvents } from '../actions/index';

// import { bindActionCreators } from 'redux';

// class EventSearch extends Component {
//     constructor(props) {
//         super(props);
    
//       }

//     componentDidMount() {
//         console.log('event search component passed', this.props.city);
//         this.props.searchEvents(this.props.city);
//     }

//     // renderEvents() {
//     //     return this.props.search.map((event) => {
//     //         console.log(event);
//     //         return (
//     //             <div className="event-results">
//     //                 {event.name}
//     //             </div>
//     //         );
//     //     });
//     // }

//     render() {
//         // if (!this.props.search) {
//         //     return <h5></h5>
//         // }
//         return (
//             <div>
//                 <h3>Search Results</h3>
//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         // search: state.eventResults,
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators( {
//         searchEvents,
//     }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EventSearch);