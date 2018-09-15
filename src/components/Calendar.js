import React, { Component } from 'react';
import Month from './Month';
import moment from 'moment';

export default class Calendar extends Component {
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
          { Months.map(month => (
            <Month/>))}
        </div>
      );
    }
  }