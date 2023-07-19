import React from "react";
import { getData } from "./hooks/Countdown";

const TimerSegment = (isFinalSeconds) => {
    const data = JSON.parse(getData());
    
    return (
        <div>
            {
                data.map((entry =>
                    <div className={entry.isZero ? "lh-1.25 px-3 align-items-center d-flex flex-column text-danger" : "lh-1.25 px-3 align-items-center d-flex flex-column"}>
                        <span className={isFinalSeconds.isFinalSeconds ? "text-uppercase fw-bold fs-4 lh-1 text-decoration-underline flashing-text" :
                            "text-uppercase fw-bold fs-4 lh-1 text-decoration-underline"}>
                            {entry.type}
                        </span>
                        <p className={isFinalSeconds.isFinalSeconds ? "m-2 flashing-text" : "m-2"}>
                            {entry.value}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default TimerSegment;