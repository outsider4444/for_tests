import React, {useState} from 'react';
import classes from "./TestComparison.module.css";

const TestComparison = (props) => {
    const [lastTriggeredButton, changeLastButton] = useState(null);
    const [sumScore, setSumScore] = useState(0);
    const [countOfChecked, changeCountOfChecked] = useState(0);
    let count_of_checked_btn = 0;

    return (
        <div>
            <button id={"button1"} onClick={() => onClickDisable(0)} className={classes.comparisonbtn}>1</button>
            <button id={"button2"} onClick={() => onClickDisable(1)} className={classes.comparisonbtn}>2</button>

            <button id={"button11"} onClick={() => onClickDisable(2)} className={classes.comparisonbtn}>11</button>
            <button id={"button22"} onClick={() => onClickDisable(3)} className={classes.comparisonbtn}>22</button>

            <button onClick={checkValue}>check</button>
        </div>

    );

    function onClickDisable(id_button) {
        let color;
        if (countOfChecked <= 1){
            color = "purple"
        }
        else {
            color = "green"
        }

        let buttons = [];

        let button1 = document.getElementById("button1");
        let button2 = document.getElementById("button2");
        let button3 = document.getElementById("button11");
        let button4 = document.getElementById("button22");

        buttons[0] = button1;
        buttons[1] = button2;
        buttons[2] = button3;
        buttons[3] = button4;
        changeLastButton(id_button);
        if (buttons[id_button].getAttribute("clicked") === "true") {
            buttons[id_button].setAttribute("clicked", "false");
            buttons[id_button].style.backgroundColor = "red"

        } else {
            buttons[id_button].setAttribute("clicked", "true");
            buttons[id_button].style.backgroundColor = color
        }

        for (let i=0; i< buttons.length; i++){
            if (buttons[i].getAttribute("clicked") === "true"){
                count_of_checked_btn += 1;
            }
        }
        if (countOfChecked <= 1){
            setSumScore(0);
        }
        // console.log(countOfChecked)
        changeCountOfChecked(count_of_checked_btn);

        // Проверка ответа на вопросы
        if (lastTriggeredButton != null) {
            if (buttons[lastTriggeredButton].getAttribute("color") ===  buttons[id_button].getAttribute("color")) {
                if(buttons[lastTriggeredButton].getAttribute("clicked") === "true"){
                    if (buttons[id_button].getAttribute("clicked") === "true")
                    setSumScore(1)
                }
            }
            else { setSumScore(0)}
            changeLastButton(id_button);
        }
    }

    function checkValue() {
        console.log("количество очков: " + sumScore);
    }
};

export default TestComparison;
