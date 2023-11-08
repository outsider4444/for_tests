import React from 'react';
import Sidebar from "../../Sidebar/Sidebar";
import classes from "./TestMap.module.css";

const ButtonOnMap = (props) => {
    function toTestLink(){
        window.location = "test/question1"
    }
    return(
        <div>
            <button onClick={toTestLink} className={classes.nextButton} id={classes[props.id]}>{props.text}</button> <br/>
        </div>
    )
}

const TestMap = () => {
    return (
        <div>
            <ButtonOnMap toLink={"toTestLink"} id={"firstBtn"} text={"1"}/>
            <ButtonOnMap toLink={"toTestLink"} id={"secondBtn"} text={"2"}/>
            <ButtonOnMap toLink={"toTestLink"} id={"thirdBtn"} text={"3"}/>
            <ButtonOnMap toLink={"toTestLink"} id={"fourBtn"} text={"4"}/>
            <ButtonOnMap toLink={"toTestLink"} id={"fiveBtn"} text={"5"}/>
            <ButtonOnMap toLink={"toTestLink"} id={"fiveBtn"} text={"10"}/>
        </div>
    );
};

export default TestMap;
