import React from 'react';
import Sidebar from "../../Sidebar/Sidebar";
import classes from "./TestMap.module.css";

const TestMap = () => {
    function toTestLink(){
        window.location = "test/question1"
    }
    return (
        <div>
            <button onClick={toTestLink} className={classes.nextButton}>&#10004;</button> <br/>
            <button onClick={toTestLink} className={classes.nextButton} id={classes["secondBtn"]}>2</button> <br/>
            <button onClick={toTestLink} className={classes.nextButton} id={classes["thirdBtn"]}>3</button><br/>
            <button onClick={toTestLink} className={classes.nextButton} id={classes["fourBtn"]}>4</button><br/>
            <button onClick={toTestLink} className={classes.nextButton} id={classes["fiveBtn"]}>5</button> <br/>
            <button onClick={toTestLink} className={classes.nextButton} id={classes["fiveBtn"]}>10</button>
        </div>
    );
};

export default TestMap;
