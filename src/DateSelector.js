import React, { useState } from "react";

const SelectDate = (props) => {
    const [currentDeadline, setCurrentDeadline] = useState(new Date().toISOString().split("T")[0]);

    const handleDeadlineChange = (event) => {
        const deadlineDate = event.target.value;
        setCurrentDeadline(deadlineDate);
        props.OnDeadlineChange(deadlineDate);
    };

    const generateRandomDate = () => {
        // get current time
        const currentTimestamp = new Date().getTime();
        // just a random future max date
        const maxDate = new Date("2035, 12, 31");
        // get a random timestamp between now and the max date
        const randomTimestamp = currentTimestamp + Math.random() * (maxDate - currentTimestamp);
        // only take the YYYY-MM-DD part
        const randomDate = new Date(randomTimestamp).toISOString().split("T")[0];
        setCurrentDeadline(randomDate);
        props.OnDeadlineChange(randomDate);
    };

    const reset = () => {
        const now = new Date().toISOString().split("T")[0];
        setCurrentDeadline(now);
        props.OnDeadlineChange(now);
    };

    return (
        <div className="mt-4">
            <p className="mb-3">Pick a date:</p>
            <input type="datetime-local" className="form-control mb-3" value={currentDeadline} id="DateInput" onChange={handleDeadlineChange} min={new Date().toISOString().split("T")[0]} />
            <button type="button" onClick={generateRandomDate} className="btn btn-primary btn-lg me-2">Or get a random date!</button>
            <button type="button" onClick={reset} className="btn btn-danger btn-lg">Reset!</button>
        </div>
    );
};

export default SelectDate;