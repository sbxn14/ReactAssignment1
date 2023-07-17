import React from "react";
import { getData } from "./hooks/Countdown";

// function TimerSegment([value, type, isZero]) {
//     return (
//         <div className="timer-segment">
//             <div className={isZero ? "countdown zero" : "countdown"}>
//                 <p>{value}</p>
//                 <span>{type}</span>
//             </div>
//         </div>
//     );
// }

const TimerSegment = () => {
    const data = JSON.parse(getData());
    return (
        <div>
            {
                data.map((entry =>
                    <div className={entry.isZero ? "countdown zero" : "countdown"}>
                        <p>{entry.value}</p>
                        <span>{entry.type}</span>
                    </div>
                ))
            }
        </div>
    )
}



export default TimerSegment;