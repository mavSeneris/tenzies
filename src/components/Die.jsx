import React from "react";

export default function Die({value}) {
    return (
        <div className="container">
            <div className="die">{value[0]}</div>
            <div className="die">{value[1]}</div>
            <div className="die">{value[2]}</div>
            <div className="die">{value[3]}</div>
            <div className="die">{value[4]}</div>
            <div className="die">{value[5]}</div>
            <div className="die">{value[6]}</div>
            <div className="die">{value[7]}</div>
            <div className="die">{value[8]}</div>
            <div className="die">{value[9]}</div>
        </div>

    )
}