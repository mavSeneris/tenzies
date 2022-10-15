import React, { useState } from "react";
// import "./StopWatch.css";
import Timer from "../components/Timer";
// import ControlButtons from "../ControlButtons/ControlButtons";

function StopWatch(props) {
    
    return (
        <div className="stop-watch">
            <Timer time={props.time} />
        </div>
    );
}

export default StopWatch;
