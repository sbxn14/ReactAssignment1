import React from 'react';
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
      deadline: new Date()
    };
  }

  handleDeadline = (deadlineValue) => {
    this.setState({ deadline: deadlineValue });
  }

  render() {
    const { deadline } = this.state;

    return (
      // <div className={isFinalSeconds ? "container d-flex flex-column justify-content-center align-items-center flash-red" : "container d-flex flex-column justify-content-center align-items-center"}>
      <div id="app" className="container d-flex flex-column justify-content-center align-items-center">
        <SelectDate OnDeadlineChange={this.handleDeadline} />
        <Timer deadline={deadline} />
      </div>
    )
  }
}

export default App;
