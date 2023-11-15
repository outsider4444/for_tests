import React, {useState} from 'react';
import classes from "./TestVariants.module.css";
import HeaderTest from "../../HeaderTest/HeaderTest";
import {Link} from "react-router-dom";

const TestVariants = (props) => {
    const [answer, clicking] = useState(0);

    function onClickDivs(valueDiv, ans){
        clicking(ans)

        let div1 = document.getElementById("text1");
        let div2 = document.getElementById("text2");
        let div3 = document.getElementById("text3");
        let div4 = document.getElementById("text4");

        if (valueDiv === "first"){
            div1.style = "font-weight: bold; background: #4b99d2; color: white"
            div2.style = "none"
            div3.style = "none"
            div4.style = "none"
        } else if (valueDiv === "second"){
            div1.style = "none"
            div2.style = "font-weight: bold; background: #4b99d2; color: white"
            div3.style = "none"
            div4.style = "none"
        } else if (valueDiv === "third"){
            div1.style = "none"
            div2.style = "none"
            div3.style = "font-weight: bold; background: #4b99d2; color: white"
            div4.style = "none"
        } else if (valueDiv === "fourth"){
            div1.style = "none"
            div2.style = "none"
            div3.style = "none"
            div4.style = "font-weight: bold; background: #4b99d2; color: white"
        }
    }
    function btnToMainLink(){
        window.location = "/"
    }

    function btnNextLink(){
        props.setId_test(props.id_test + 1)
        console.log(props.score);
    }
    function btnCheckAnswer(){
        let btn_check_answer = document.getElementById("btn_check_answer");
        if (answer === 3){
            props.setScore(1);
        }
        else {
            props.setScore(0);
        }
        btn_check_answer.hidden = true
        console.log(props.score);
    }

    return (
        <div>
            <HeaderTest value={props.value} />
            <h1>Ответьте на следуйщий вопрос: Вы абоба?</h1>
            <div className={classes.buttonsLine}>
                <div className={classes.text1} id={"text1"} onClick={() => onClickDivs("first", 1)}>
                    <span>Ответ 1</span>
                </div>
                <div className={classes.text1} id={"text2"} onClick={() => onClickDivs("second", 2)}>
                    <span>Ответ 2</span>
                </div>
                <div className={classes.text1} id={"text3"} onClick={() => onClickDivs("third", 3)}>
                    <span>Ответ 3</span>
                </div>
                <div className={classes.text1} id={"text4"} onClick={() => onClickDivs("fourth", 4)}>
                    <span>Ответ 4</span>
                </div>
            </div>
            <button onClick={btnToMainLink} className={classes.skipButton}>Пропустить</button><br/>
            <button onClick={btnCheckAnswer} id={"btn_check_answer"}>Проверить</button><br/>
            <Link to={"/test/question"+props.id_test} onClick={btnNextLink} className={classes.nextButton}>Далее</Link>
        </div>
    );
};

export default TestVariants;
