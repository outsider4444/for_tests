import React from 'react';
import classes from "./HeaderTest.module.css";
import {PrimeReactProvider} from "primereact/api";
import {ProgressBar} from "primereact/progressbar";

const HeaderTest = (props) => {
    return (
        <div className={classes.header_test}>
            <div className={classes.progress_bar}>
                <PrimeReactProvider>
                    <ProgressBar value={props.value} ></ProgressBar>
                </PrimeReactProvider>
            </div>
            <div className={classes.bottom_line}>
            </div>
        </div>
    );
};

export default HeaderTest;
