import React from "react";

export default function Die({ value }) {
    return (
        <div className="container">
            <div className="die-face">
                <h1 className="die-num">{value[0]}</h1>
            </div>
            <div className="die-face">
                <h1 className="die-num">{value[1]}</h1>
            </div>
            <div className="die-face">
                <h1 className="die-num">{value[2]}</h1>
            </div>
            <div className="die-face">
                <h1 className="die-num">{value[3]}</h1>
            </div>
            <div className="die-face">
                <h1 className="die-num">{value[4]}</h1>
            </div>
            <div className="die-face">
                <h1 className="die-num">{value[5]}</h1>
            </div>
            <div className="die-face">
                <h1 className="die-num">{value[6]}</h1>
            </div>
            <div className="die-face">
                <h1 className="die-num">{value[7]}</h1>
            </div>
            <div className="die-face">
                <h1 className="die-num">{value[8]}</h1>
            </div>
            <div className="die-face">
                <h1 className="die-num">{value[9]}</h1>
            </div>
        </div>

    )
}