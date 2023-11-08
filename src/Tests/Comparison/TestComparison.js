import React, {useState} from 'react';
import classes from "./TestComparison.module.css";
import {Link} from "react-router-dom";

const buttonComponent = (props) => {
    return (
        <div>

        </div>
    );
}

const TestComparison = (props) => {
    let buttons = [
        {id: 1, text: "1", key: 1, good_choice: 3, last_choice: null}
    ];

    return (
        <div>
            <button id={"button1"} onClick={() => onClickDisable(0)} className={classes.comparisonbtn}>1</button>
            <button id={"button2"} onClick={() => onClickDisable(1)} className={classes.comparisonbtn}>2</button>
            <button id={"button11"} onClick={() => onClickDisable(2)} className={classes.comparisonbtn}>11</button>
            <button id={"button22"} onClick={() => onClickDisable(3)} className={classes.comparisonbtn}>22</button>

            <button>check</button>

            <Link to={"/test/question4"}>Next</Link>
        </div>

    );

    function onClickDisable(id_button) {

        let button1 = document.getElementById("button1");
        let button2 = document.getElementById("button2");
        let button3 = document.getElementById("button11");
        let button4 = document.getElementById("button22");

    };
}

    export default TestComparison;
