import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../css/app.css';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      console.log('not showing', this.props.show);
      return null;
    }

    console.log('showing', this.props.show);

    return (
      <div className="backdrop">
        <button onClick={this.props.onCLose}>
        x
        </button>
      </div>
    );
  }
}

export default Modal;
