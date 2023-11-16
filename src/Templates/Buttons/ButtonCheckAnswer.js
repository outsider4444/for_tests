import React from 'react';
import classes from "./Button.module.css";

const ButtonCheckAnswer = (props) => {
    return (
        <button onClick={props.functionOnClick} id={"btn_check_answer"}
                className={classes.check_btn}
                disabled={props.disabled}
                hidden={props.hidden}
        >
            {props.text}
        </button>
    );
};

export default ButtonCheckAnswer;
