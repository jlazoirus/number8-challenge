import React, { Component } from 'react';
import moment from 'moment';
import Day from './Day';

export default class Month extends Component {
    static defaultProps = {
        params: {}
    }
    
    state = {
        months: moment.months(),
        days: moment.weekdaysShort()
    }
    componentDidMount() {
        console.log(this.props.params);
    }

    render() {
        const weeks = Object.keys(this.props.params);
        return (
            <div className="calendar">
                <div className="month">
                    <div className="name">
                    {this.state.months[this.props.name.split('-')[1] - 1]} {this.props.name.split('-')[0]}
                    </div>
                    { weeks.map(weekNumber => (
                        <div className="row" key={weekNumber}>
                            { this.state.days.map(day => (
                                <Day 
                                    key={`${weekNumber}-${day}`} 
                                    params={this.props.params[weekNumber][day]} 
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
  }