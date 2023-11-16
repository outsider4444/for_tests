import React, {useState} from 'react';
import classes from "./TestVariants.module.css";
import HeaderTest from "../../HeaderTest/HeaderTest";
import {Link} from "react-router-dom";
import ButtonCheckAnswer from "../../../Templates/Buttons/ButtonCheckAnswer";
import btn_classes from "../../../Templates/Buttons/Button.module.css";
import LinkNextQuestion from "../../../Templates/Buttons/LinkNextQuestion";

const TestVariants = (props) => {
    const [answer, clicking] = useState(0);
    const [btnIsDisabled, setBtnIsDisabled] = useState(true);
    const [btnIsHidden, setBtnIsHidden] = useState(false);
    const [linkIsHidden, setLinkIsHidden] = useState(true);
    const [isEnded, setIsEnded] = useState(false);


    let btn_check_answer = document.getElementById("btn_check_answer");

    function onClickDivs(valueDiv, ans){
        if (!isEnded){
            clicking(ans)
            let btn_check_answer = document.getElementById("btn_check_answer");

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
            setBtnIsDisabled(false)
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
        if (answer === 3){
            props.setScore(1);
        }
        else {
            props.setScore(0);
        }

        console.log(props.score);
        setLinkIsHidden(false);
        setBtnIsHidden(true);
        setIsEnded(true);
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
            <div className={classes.buttonsLine_answer}>
                <ButtonCheckAnswer disabled={btnIsDisabled} functionOnClick={btnCheckAnswer} hidden={btnIsHidden} text={"Проверить"}/>
                <LinkNextQuestion id_test={props.id_test} hidden={linkIsHidden} functionOnClick={btnNextLink} text={"Далее"}/>
            </div>
        </div>
    );
};

export default TestVariants;
