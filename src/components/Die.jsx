import React, { useState } from "react";
import "../assets/styles/dice.css"

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    };


    return (
        <div>
            {props.numFace ?
                <div
                    style={styles}
                    className={props.tenzies ? "dieNum-face shakeDice" : "dieNum-face"}
                    onClick={props.holdDice}
                >
                    <h1 className="die-num">{props.value}</h1>
                </div>

                :

                <div
                    style={styles}
                    className={props.tenzies? `die-face dice${props.value} shakeDice`: `die-face dice${props.value}`}
                    onClick={props.holdDice}
                >
                    {
                        props.value === 1 &&
                        <span className="dot red"></span>
                    }

                    {
                        props.value === 2 &&
                        <>
                            <span className="dot"> </span>
                            <span className="dot"> </span>
                        </>
                    }
                    {
                        props.value === 3 &&
                        <>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </>
                    }
                    {
                        props.value === 4 &&
                        <>
                            <div className="column">
                                <span className="dot"></span>
                                <span className="dot bottom"></span>
                            </div>
                            <div className="column">
                                <span className="dot"></span>
                                <span className="dot bottom"></span>
                            </div>
                        </>
                    }
                    {
                        props.value === 5 &&
                        <>
                            <div class="column">
                                <span class="dot"></span>
                                <span class="dot bottom"></span>
                            </div>

                            <div class="column">
                                <span class="dot"></span>
                            </div>

                            <div class="column">
                                <span class="dot"></span>
                                <span class="dot bottom"></span>
                            </div>
                        </>
                    }
                    {
                        props.value === 6 &&
                        <>
                            <div class="column">
                                <span class="dot"></span>
                                <span class="dot mid"></span>
                                <span class="dot"></span>
                            </div><div class="column">
                                <span class="dot"></span>
                                <span class="dot mid"></span>
                                <span class="dot"></span>
                            </div>
                        </>
                    }
                </div>}
        </div>
    )
}
