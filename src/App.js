import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Form from './components/Form';
import './App.css';

class App extends Component {
  state = {
    startDate: null,
    numberDays: 0,
    countryCode: null,
    version: 1
  }

  updateCalendar = (dateState) => {
    this.setState((state) => ({ ...dateState, version: state.version + 1 }))
  }

  render() {
    return (
      <div className="App">
        <Form onUpdate={this.updateCalendar}></Form>
        <Calendar params= {this.state.version} {...this.state} ></Calendar>
      </div>
    );
  }
}

export default App;
