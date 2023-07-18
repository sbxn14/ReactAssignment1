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
    this.state = {
      deadline: new Date(),
      isFinalSeconds: false
    };
  }

  handleDeadline = (deadlineValue) => {
    this.setState({ deadline: deadlineValue });
  }

  handleFinalSeconds = (isFinalSecondsValue) => {
    this.setState({ isFinalSeconds: isFinalSecondsValue });
  };

  render() {
    const { deadline, isFinalSeconds } = this.state;

    return (
      // <div className={isFinalSeconds ? "container d-flex flex-column justify-content-center align-items-center flash-red" : "container d-flex flex-column justify-content-center align-items-center"}>
      <div id="app" className="container d-flex flex-column justify-content-center align-items-center">
        {isFinalSeconds && <div id="overlay">Overlay Content</div>}
        <SelectDate OnDeadlineChange={this.handleDeadline} />
        <Timer deadline={deadline} OnFinalSeconds={this.handleFinalSeconds} />
      </div>
    )
  }
}

export default App;
