import React, { Component } from 'react';
import './Gift.css';

class Gift extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Gift">
        {this.props.name}
        <button className="remove">X</button>
      </div>
    );
  }
}

export default Gift;
