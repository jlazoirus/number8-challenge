import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Form from './components/Form';
import './App.css';

class App extends Component {
  state = {
    startDate: null,
    numberDays: 0,
    countryCode: null
  }

  updateCalendar = dateState => {
    this.setState({ ...dateState });
  }

  render() {
    return (
      <div className="App">
        <Form onUpdate={this.updateCalendar}></Form>
        <Calendar {...this.state} ></Calendar>
      </div>
    );
  }
}

export default App;
