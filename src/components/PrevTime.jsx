import React from "react";

export default function PrevTime(props) {
    return (
        <div className="timer">
    
        <span className="prev-digits">
            {("0" + Math.floor((props.prevTime / 60000) % 60)).slice(-2)}:
        </span>
        <span className="prev-digits">
            {("0" + Math.floor((props.prevTime / 1000) % 60)).slice(-2)}.
        </span>
        <span className="-prev-digits mili-sec">
            {("0" + ((props.prevTime / 10) % 100)).slice(-2)}
        </span>
        </div>
    );
    }