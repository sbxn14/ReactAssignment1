import React from "react";
import { Countdown, getData } from "./hooks/Countdown";
import TimerSegment from "./TimerSegment";

function Timer(deadline) {
    Countdown(deadline);

    // parse JSON for Zero check
    const data = JSON.parse(getData());

    let sumOfData = data.map(x => x.value)
        .reduce((a, b) => a + b, 0);

    if (sumOfData <= 0) {
        // if everything is 0, no countdown time was selected, show view to user
        return <NothingSelected />;
    } else {
        // a time was properly selected and the countdown can be rendered and be started
        // convert date to DD/MM/YYYY for display purposes
        const deadlineTitle = deadline.deadline.split('-').reverse().join('-');

        return (
            <div className="deadlineTitle">
                <h1>It will be {deadlineTitle} in only:</h1>
                <ShowTimer />
            </div>
        )
    }
}

function ShowTimer() {
    return (
        <div className="showTimer">
            <TimerSegment />
        </div>
    );
}

function NothingSelected() {
    return (
        <div className="select-time">
            <h3>Please select a time to start the countdown!</h3>
        </div>
    );
}

export default Timer;