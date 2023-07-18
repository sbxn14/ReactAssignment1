import React, { useState, useEffect } from "react";
import { Countdown, getData } from "./hooks/Countdown";
import TimerSegment from "./TimerSegment";

function Timer(props) {
    const [isFinalSeconds, OnFinalSeconds] = useState(false);

    useEffect(() => {
        Countdown(props.deadline);

        const data = JSON.parse(getData());
        const bool = data
            .map(({ value, type }) => (type === "Seconds" ? value <= 5 : value === 0))
            .every(isZero => isZero);

        OnFinalSeconds(bool);
        props.OnFinalSeconds(bool);
    }, [props.deadline, props.OnFinalSeconds]);

    const data = JSON.parse(getData());

    // sum up all the values (days, hours, minutes, seconds)
    let sumOfData = data.map(x => x.value)
        .reduce((a, b) => a + b, 0);

    if (sumOfData <= 0) {
        // if everything is 0, no countdown time was selected (or its the current date) and the countdown won't appear, instead a message will be shown
        return <NothingSelected />;
    } else {
        // a time was properly selected and the countdown can be rendered and be started
        // convert date to DD/MM/YYYY for display purposes
        const deadlineTitle = props.deadline.split('-').reverse().join('-');

        return (
            <div className="d-flex justify-content-center flex-column text-center p-4 m-2">
                <h3>It will be {deadlineTitle} in only:</h3>
                <ShowTimer />
            </div>
        )
    }
}

function ShowTimer() {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center fw-bold fs-5 lh-1.75 p-2 text-decoration-none text-dark border border-success timer">
            <TimerSegment />
        </div>
    );
}

function NothingSelected() {
    return (
        <div className="text-center p-4 m-2">
            <h3>Please select a time to start the countdown!</h3>
        </div>
    );
}

export default Timer;