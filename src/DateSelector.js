import React from "react";
import Timer from "./Timer";

let deadline = '';

function SelectDate() {
    return (
        <div className='DateOrRandomSelector'>
            <p>Fill in a future date:</p>
            <input type="date" id="DateInput" onChange={DatePicker} min={new Date().toISOString().split("T")[0]} />
            <button type="button" onClick={RandomPicker} className="btn btn-secondary btn-lg">Or get a random date!</button>
            <Timer deadline={deadline} />
        </div>
    );
}

function RandomPicker() {
    const now = new Date().getTime();
    const maxDate = new Date("2050, 12, 31");
    // hide buttons somewhere here
    // only grab the date part of the string
    deadline = new Date(now + Math.random() * (maxDate - now)).toISOString().substring(0, 10);
    return;
}

function DatePicker(event) {
    deadline = event.target.value;
    return;
}

export default SelectDate;