import React, {useState} from 'react';
import classes from "./HeaderTest.module.css";
import {PrimeReactProvider} from "primereact/api";
import {Tooltip} from "primereact/tooltip"
import {Slider} from "@mui/material";
import {ProgressBar} from "primereact/progressbar";

const HeaderTest = (props) => {
    return (
        <div className={classes.header_test}>
            <PrimeReactProvider>
                <ProgressBar value={props.value} ></ProgressBar>
            </PrimeReactProvider>
        </div>
    );
};

export default HeaderTest;
