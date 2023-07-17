import React, { useState } from 'react';
import './App.css';
import Timer from "./Timer";
import SelectDate from './DateSelector';

// Bootstrap 5 import (via NPM)
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeadline = this.handleDeadline.bind(this)
  }

  state = { deadline: new Date() }

  handleDeadline = (deadlineValue) => {
    console.log('UPDATING STATE', deadlineValue)
    this.setState({ deadline: deadlineValue });
  }

  getDeadline = () => {
    return this.state.deadline;
  }

  render() {
    return (
      <div className="App">
        <SelectDate OnDeadlineChange={this.handleDeadline} />
        <Timer deadline={new Date("2025-05-02")} />
      </div>
    )
  }
}

export default App;
