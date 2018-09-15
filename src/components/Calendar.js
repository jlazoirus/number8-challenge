import React, { Component } from 'react';
import Month from './Month';
import moment from 'moment';

export default class Calendar extends Component {
    
    state = {
        dates: []
    }
    
    createCalendar = () => {
    
        if (!this.props.startDate || !this.props.numberDays) {
            return [];
        }

        let startDate = moment(this.props.startDate, 'YYYY-MM-DD');
        let dates = {};
        let counter = 1;

        while (counter <= this.props.numberDays) {
            const month = moment(startDate).format('YYYY-M');
            const weekNumber = startDate.format('w');
            const dayNumber = startDate.format('D');
            const dayName = startDate.format('ddd');
            const dayType = ['Sun', 'Sat'].indexOf(dayName) > -1 ? 'yellow' : 'green';
            
            if (!dates[month]) {
                dates[month] = {};
            }

            if (!dates[month][weekNumber]) {
                dates[month][weekNumber] = {}
            }

            dates[month][weekNumber][dayName] = { 
                value: dayNumber,
                type: dayType
            };

            counter++;
            startDate.add(1, 'day');
        }
    
        return dates;
    }
    
    componentWillReceiveProps() {
        this.setState({ dates: this.createCalendar()});
    }

    render() {
        const months = Object.keys(this.state.dates);
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
            {months.map( month => (
                <Month
                key={month}
                name={month}
                params={this.state.dates[month]}
                />
            ))}
        </div>
      );
    }
  }