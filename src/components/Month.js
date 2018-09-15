import React, { Component } from 'react';
import Day from './Day';

export default class Month extends Component {
    render() {
      return (
        <div className="calendar">
            <div className="row weekday-row">
                <div className="weekday">S</div>
                <div className="weekday">M</div>
                <div className="weekday">T</div>
                <div className="weekday">W</div>
                <div className="weekday">T</div>
                <div className="weekday">F</div>
                <div className="weekday">S</div>
            </div>
          { week.map(month => (
            <Day/>))}
        </div>
      );
    }
  }