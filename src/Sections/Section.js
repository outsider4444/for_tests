import React from 'react';
import classes from "./Section.module.css";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-router-dom";

const Section = () => {
    return (
        <div className={classes.container}>
            <Link to={"/"}>Секция 1</Link>
            <p>Секция 2</p>
            <p>Секция 3</p>
            <p>Секция 4</p>
        </div>
    );
};

export default Section;
