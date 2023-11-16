import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Button.module.css";

const LinkNextQuestion = (props) => {
    return (
            <Link to={"/test/question"+props.id_test} className={classes.link_next_question} onClick={props.functionOnClick} hidden={props.hidden}>{props.text}</Link>
    );
};

export default LinkNextQuestion;
