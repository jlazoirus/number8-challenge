import React, { Component } from 'react';

export default class Form extends Component {
    render () {
        return (
            <div className="form">
                <div className="row">
                    <label>Start Date</label>
                    <input type="date" 
                    name="startDate"
                    defaultValue={this.state.startDate} 
                    onChange={this.updateForm} 
                    />
                </div>
                <div className="row">
                    <label>Number of days</label>
                    <input 
                    type="number" 
                    name="numberDays"
                    defaultValue={this.state.numberDays}
                    onChange={this.updateForm} 
                    />
                </div>
                <div className="row">
                    <label>Country Code</label>
                    <input type="text" 
                    name="countryCode"
                    defaultValue={this.state.countryCode}
                    onChange={this.updateForm} 
                    />
                </div>
                <div className="row submit">
                <button onClick={this.submit}>Submit</button>
            </div>
       </div>
        );
    }
}