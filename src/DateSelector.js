import React from "react";

let currentDeadline = new Date();

const SelectDate = (props) => {
    const handleDeadlineChange = () => {
        currentDeadline = document.getElementById("DateInput").value
        console.log("chosen: " + currentDeadline);
        console.log('aaaaaaaaaaaaaaaaaaaaaaaa')
        const deadlineDate = new Date(Date.parse(currentDeadline));
        console.log('b')
        console.log(deadlineDate)
        props.OnDeadlineChange(deadlineDate);
    }

    return (
        <div className='DateOrRandomSelector'>
            <p>Pick a date:</p>
            <input type="date" value={currentDeadline} id="DateInput" onChange={handleDeadlineChange} min={new Date().toISOString().split("T")[0]} />
            <button type="button" onClick={generateRandomDate} className="btn btn-secondary btn-lg">Or get a random date!</button>
        </div>
    );

    function generateRandomDate() {
        const now = new Date().getTime();
        const maxDate = new Date("2050, 12, 31");
        // only grab the date part of the string
        currentDeadline = new Date(now + Math.random() * (maxDate - now)).toISOString().substring(0, 10);
        console.log("random: " + currentDeadline);
        props.OnDeadlineChange(currentDeadline);
    }
}

export default SelectDate;