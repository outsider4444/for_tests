import React, {useState} from 'react';
import classes from "./TestTrueOrFalse.module.css";
import HeaderTest from "../../HeaderTest/HeaderTest";
import {NavLink} from "react-router-dom";

const TestTrueOrFalse = (props) => {
    const [answer, clicking] = useState("none");

    function onClickDivs(valueDiv, ans){
        clicking(ans)
        let div1 = document.getElementById("text1");
        let div2 = document.getElementById("text2");

        if (valueDiv === "first"){
            div1.style = "font-weight: bold; background: #4b99d2; color: white"
            div2.style = "none"
        } else if (valueDiv === "second"){
            div1.style = "none"
            div2.style = "font-weight: bold; background: #4b99d2; color: white"
        }
    }
    function btnNextLink(){
        console.log(props.score);
    }
    function btnCheckAnswer(){
        let btn_check_answer = document.getElementById("btn_check_answer");
        if (answer === false){
            props.setScore(props.score + 1)
        }
        btn_check_answer.hidden = true
        console.log(props.score);
    }

    return (
        <div>
            <HeaderTest value={props.value} />
            <h1>Верно ли утверждение данное утверждение: Петр 1 был первым императором?</h1>
            <div className={classes.buttonsLine}>
                <div className={classes.text1} id={"text1"} onClick={() => onClickDivs("first", true)}>
                    <span>Да</span>
                </div>
                <div className={classes.text1} id={"text2"} onClick={() => onClickDivs("second", false)}>
                    <span>Нет</span>
                </div>

            </div>
            <button onClick={btnCheckAnswer} id={"btn_check_answer"}>Проверить</button>
            <NavLink to={"/test/result"}>Выход</NavLink>
        </div>
    );
};

export default TestTrueOrFalse;
