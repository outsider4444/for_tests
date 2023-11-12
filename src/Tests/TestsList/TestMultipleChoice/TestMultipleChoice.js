import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import HeaderTest from "../../HeaderTest/HeaderTest";


// Todo Что-то не так с распределением баллов за ответ. Хм...
const TestMultipleChoice = (props) => {
    const [score, setScore] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(4).fill(false));

    const handleButtonClick = (index) => {
        let btn = document.getElementById("btn" + index);
        if (btn.style.backgroundColor !== "green") {
            btn.style.backgroundColor = "green";
        } else {
            btn.style.backgroundColor = "#FCFCFC"
        }
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[index] = !newSelectedAnswers[index];
        setSelectedAnswers(newSelectedAnswers);
    };

    const calculateScore = () => {
        let newScore = 0;
        selectedAnswers.forEach((answer) => {
            if (answer) {
                newScore += 1;
            }
        });
        setScore(newScore);
    };

    return (
        <div>
            <HeaderTest value={props.value} setValue={props.setValue} />
            <h1>Тест по истории</h1>
            <p>Выберите правильные ответы:</p>
            <button onClick={() => handleButtonClick(0)} id={"btn0"}>Ответ 1</button>
            <button onClick={() => handleButtonClick(1)} id={"btn1"}>Ответ 2</button>
            <button onClick={() => handleButtonClick(2)} id={"btn2"}>Ответ 3</button>
            <button onClick={() => handleButtonClick(3)} id={"btn3"}>Ответ 4</button>
            <p>Ваш балл: {score}</p>
            <button onClick={calculateScore}>Подсчитать баллы</button>
            <NavLink to={"/test/question4"}>Далее</NavLink>
        </div>
    );


    function checkValue() {
        console.log("количество очков: " + setScore);
    }

};

export default TestMultipleChoice;
