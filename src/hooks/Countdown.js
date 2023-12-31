import { useEffect, useState, useMemo } from "react";

let timeData = [];

function Countdown(deadline) {
    const date = useMemo(() => new Date(deadline), [deadline]);
    const [countdown, setCount] = useState(date - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(date - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [date]);

    TimeCalculations(countdown);
}

function TimeCalculations(time) {
    // milliseconds * 1000 = seconds * 60 = minutes * 60 = hours * 24 = days
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    timeData = [
        {
            value: days,
            type: "Days",
            isZero: (days === 0)
        },
        {
            value: hours,
            type: "Hours",
            isZero: (hours === 0)
        },
        {
            value: minutes,
            type: "Minutes",
            isZero: (minutes === 0)
        },
        {
            value: seconds,
            type: "Seconds",
            isZero: (seconds === 0)
        },
    ];
}

// Decided to go the JSON route since I was experiencing some issues without it
function getData() {
    return JSON.stringify(timeData);
}

export { Countdown, getData };