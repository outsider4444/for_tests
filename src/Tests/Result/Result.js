import React from 'react';
import Header from "../../Templates/Header/Header";

const Result = (props) => {
    return (
        <div>
            <Header/>
            ПОЗДРАВЛЯЕМ, ВЫ ЗАРАБОТАЛИ ЦЕЛЫХ {props.score} очков!
        </div>
    );
};

export default Result;
