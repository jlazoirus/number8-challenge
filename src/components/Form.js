import React, { Component } from 'react';

export default class Form extends Component {
    static defaultProps = {
        onUpdate: () => null
    }
    
    state = {
        startDate: '2008-08-15',
        numberDays : 17,
        countryCode: 'US'
    }
    
    submit = () => {
        this.props.onUpdate({...this.state})
    }
    
    updateForm = ({ target : { name, value}}) => {
        this.setState({[name]: value})
    }

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
                    onChange={this.updateFormValues} 
                    />
                </div>
                <div className="row submit">
                <button onClick={this.submit}>Submit</button>
            </div>
       </div>
        );
    }
}