import React, { useState } from "react";
import Timer from "../components/Timer";

function StopWatch(props) {
    
    return (
        <div className="stop-watch">
            <Timer time={props.time} />
        </div>
    );
};

export default StopWatch;
