import React from "react";
import { Countdown, getData } from "./hooks/Countdown";
import TimerSegment from "./TimerSegment";

function Timer(props) {
    Countdown(props.deadline)
    // convert timeData back from JSON
    const data = JSON.parse(getData());

    // Function to check if there are 5 seconds left and other time units are 0
    const CheckIfFiveSecondsLeft = () => {
        const secondsData = data.find(d => d.type === "Seconds");
        const otherUnitsData = data.filter(d => d.type !== "Seconds");

        return secondsData.value <= 5 && otherUnitsData.every(d => d.isZero);
    };

    let isFiveSecondsLeft = CheckIfFiveSecondsLeft();

    // sum up all the values (days, hours, minutes, seconds)
    let sumOfData = data.map(x => x.value)
        .reduce((a, b) => a + b, 0);

    if (sumOfData <= 0) {
        // if everything is 0, no countdown time was selected (or its the current date) and the countdown won't appear, instead a message will be shown
        return <NothingSelected />;
    } else {
        // a time was properly selected and the countdown can be rendered and be started
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        }
        // Convert it to a "DD-MM-YYYY, hh:mm:ss" format for display purposes
        const deadlineTitle = new Intl.DateTimeFormat('en-NL', options).format(props.deadline).split(",");

        // const deadlineTitle = props.deadline.split("T")[0].split('-').reverse().join('-');

        return (
            <div className="d-flex justify-content-center flex-column text-center p-4 m-2">
                <h3 className={isFiveSecondsLeft ? "flashing-text" : "font-weight-light"}>
                    It will be {deadlineTitle[1]} on {deadlineTitle[0]} in only:
                </h3>
                <ShowTimer isFinalSeconds={isFiveSecondsLeft} />
            </div>
        )
    }
}

function ShowTimer(isFinalSeconds) {
    return (
        <div className={isFinalSeconds.isFinalSeconds ? "d-flex flex-row justify-content-center align-items-center fw-bold fs-5 lh-1.75 p-2 text-decoration-none text-dark timer flashing-border" :
            "d-flex flex-row justify-content-center align-items-center fw-bold fs-5 lh-1.75 p-2 text-decoration-none text-dark timer"}>
            <TimerSegment isFinalSeconds={isFinalSeconds.isFinalSeconds} />
        </div>
    );
}

function NothingSelected() {
    return (
        <div className="text-center p-4 m-2">
            <h3>Please select a date or time to start the countdown!</h3>
        </div>
    );
}

export default Timer;