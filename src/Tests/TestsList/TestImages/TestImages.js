import React, {useState} from 'react';
import HeaderTest from "../../HeaderTest/HeaderTest";
import classes from "./TestImages.module.css";
import {Link} from "react-router-dom";

const TestImages = (props) => {
    const [answer, clicking] = useState(null);
    const score_for_checking = props.score;

    function onClickDivs(valueDiv, ans) {
        clicking(ans)

        let div1 = document.getElementById("text1");
        let div2 = document.getElementById("text2");
        let div3 = document.getElementById("text3");
        let div4 = document.getElementById("text4");

        if (valueDiv === "first") {
            div1.style = "font-weight: bold; background: #4b99d2; color: white"
            div2.style = "none"
            div3.style = "none"
            div4.style = "none"
        } else if (valueDiv === "second") {
            div1.style = "none"
            div2.style = "font-weight: bold; background: #4b99d2; color: white"
            div3.style = "none"
            div4.style = "none"
        } else if (valueDiv === "third") {
            div1.style = "none"
            div2.style = "none"
            div3.style = "font-weight: bold; background: #4b99d2; color: white"
            div4.style = "none"
        } else if (valueDiv === "fourth") {
            div1.style = "none"
            div2.style = "none"
            div3.style = "none"
            div4.style = "font-weight: bold; background: #4b99d2; color: white"
        }
    }

    function btnToMainLink() {
        window.location = "/"
    }

    function btnCheckAnswer() {
        let btn_check_answer = document.getElementById("btn_check_answer");
        if (answer === 2) {
            if (score_for_checking === props.score) {
                props.setScore(props.score + 1);
            }
        } else {
            if (props.score > score_for_checking) {
                props.setScore(props.score - 1);
            }
        }
        btn_check_answer.hidden = true
        console.log(props.score, score_for_checking)
    }

    function btnNextLink() {
        console.log(props.score)
        props.setId_test(props.id_test + 1)
    }

    // Теперь кнопки с картинками спрятаны в div, изменять через css
    return (
        <div>
            <HeaderTest value={props.value} setValue={props.setValue}/>
            <h1>Ответьте на следуйщий вопрос: Вы абоба?</h1>
            <div className={classes.buttonsLine}>
                <div className={classes.text1} id={"text1"} onClick={() => onClickDivs("first", 1)}>
                    <div className={classes.image}></div>
                </div>
                <div className={classes.text1} id={"text2"} onClick={() => onClickDivs("second", 2)}>
                    <div className={classes.image}></div>
                </div>
            </div>
            <div className={classes.buttonsLine}>
                <div className={classes.text1} id={"text3"} onClick={() => onClickDivs("third", 3)}>
                    <div className={classes.image}></div>
                </div>
                <div className={classes.text1} id={"text4"} onClick={() => onClickDivs("fourth", 4)}>
                    <div className={classes.image}></div>
                </div>
            </div>
            <button onClick={btnToMainLink} className={classes.skipButton}>Пропустить</button>
            <button onClick={btnCheckAnswer} id={"btn_check_answer"}>Проверить</button>
            <br/>
            <Link to={"/test/question" + props.id_test} onClick={btnNextLink}
                  className={classes.nextButton}>Далее</Link>
        </div>
    );
};

export default TestImages;
