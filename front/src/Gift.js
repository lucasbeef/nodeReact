import React, { Component } from 'react';
import './Gift.css';

class Gift extends Component {
  render() {
    return (
      <div className="Gift">
        {this.props.gift.name}
        <button
          className="remove"
          onClick={() => this.props.remove(this.props.gift.id)}>
          X
        </button>
      </div>
    );
  }
}

export default Gift;
