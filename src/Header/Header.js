import React from 'react';
import classes from "./Header.module.css"
import {useLocation} from "react-router-dom";

const Header = (props) => {
    const location = useLocation();
    let id_location;
    let name_for_location = ""
    if (location.pathname === "/"){
        id_location = 1;
        name_for_location = "Древняя русь"
    }
    if (location.pathname === "/section2"){
        id_location = 2;
        name_for_location = "Эпоха дворцовых переворотов"
    }
    if (location.pathname === "/section3"){
        id_location = 3;
        name_for_location = "Петр 1"
    }
    if (location.pathname === "/section4"){
        id_location = 4;
        name_for_location = "СССР"
    }
    if (location.pathname === "/sections"){
        id_location = null
        name_for_location = "Разделы"
    }

    return (
        <div className={classes.header}>
            <div className={classes.headerLogo}>
            </div>
            <div>
                <div className={classes.title}>
                    {id_location === null ? <span>{name_for_location}</span> : <span>Секция {id_location}: {name_for_location}</span>}
                </div>
                <div className={classes.bottom_line}>
                </div>
            </div>
        </div>
    );
};

export default Header;
