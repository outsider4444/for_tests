import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import HeaderTest from "../../HeaderTest/HeaderTest";
import {forEach} from "react-bootstrap/ElementChildren";
import classes from "../TestVariants/TestVariants.module.css";


// Todo Что-то не так с распределением баллов за ответ. Хм...
const TestMultipleChoice = (props) => {
    const [score, setScore] = useState(0);
    const [eventList, setEventList] = useState([
        {id: 1, isClicked: false, isGood: true, text: "Ответ 1"},
        {id: 2, isClicked: false, isGood: false, text: "Ответ 2"},
        {id: 3, isClicked: false, isGood: false, text: "Ответ 3"},
        {id: 4, isClicked: false, isGood: true, text: "Ответ 4"},
    ])


    const handleButtonClick = (index) => {
        let btn = document.getElementById("btn" + index);
        if (btn.style.backgroundColor !== "green") {
            btn.style.backgroundColor = "green";
            let current_event = eventList[index-1]
            current_event.isClicked = true
            console.log(current_event)
        } else {
            btn.style.backgroundColor = "#FCFCFC";
            let current_event = eventList[index-1];
            current_event.isClicked = false
            console.log(current_event)
        }
    };

    const btnCheckAnswer = () => {
        let btn_check_answer = document.getElementById("btn_check_answer");
        let event_count_good = 0;
        eventList.forEach((event) => {
            if(event.isGood && event.isClicked){
                event_count_good += 1;
            }
            else if(event.isClicked && !event.isGood) {
                event_count_good = 0;
            }
        });
        if(event_count_good === 2){
            props.setScore(props.score + 1);
        }
        btn_check_answer.hidden = true
        console.log(props.score);
    };

    function btnNextLink() {
        console.log(props.score);
        props.setId_test(props.id_test + 1)
    }

    return (
        <div>
            <HeaderTest value={props.value} setValue={props.setValue}/>
            <h1>Тест по истории</h1>
            <p>Выберите правильные ответы:</p>
            <button onClick={() => handleButtonClick(1)} id={"btn1"}>Ответ 1</button>
            <button onClick={() => handleButtonClick(2)} id={"btn2"}>Ответ 2</button>
            <button onClick={() => handleButtonClick(3)} id={"btn3"}>Ответ 3</button>
            <button onClick={() => handleButtonClick(4)} id={"btn4"}>Ответ 4</button> <br/>
            <button onClick={btnCheckAnswer} id={"btn_check_answer"}>Подсчитать баллы</button>
            <Link to={"/test/question"+props.id_test} onClick={btnNextLink} className={classes.nextButton}>Далее</Link>
        </div>
    );
};

export default TestMultipleChoice;
