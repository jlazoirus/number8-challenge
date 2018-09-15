import React, { Component } from 'react';

export default class Day extends Component {
    
    static defaultProps = {
      params: {}
    }
  
    render () {
      const { type = 'invalid', value = undefined } = this.props.params;
      return (
        <div className={`cell ${type}`}>{value}</div>
      )
    }
  
}