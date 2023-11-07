import React from 'react';
import classes from "./Header.module.css"
import {useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <div className={classes.header}>
            <div className={classes.headerLogo}>
            </div>
            <div className={location.pathname!=="/sections" ? classes.title : classes.hidden_header }>
                <span>Секция 1: Древняя русь</span>
            </div>
            {/*<div id={classes["coins"]}>*/}
            {/*    <span id={classes["coins_text"]}>1500</span>*/}
            {/*    <span id={classes["coins_img"]}>*/}
            {/*        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16H13C13.6667 16 15 15.6 15 14C15 12.4 13.6667 12 13 12H11C10.3333 12 9 11.6 9 10C9 8.4 10.3333 8 11 8H12M12 16H9M12 16V18M15 8H12M12 8V6M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"*/}
            {/*                          stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*        </svg>*/}
            {/*    </span>*/}
            {/*</div>*/}


        </div>
    );
};

export default Header;
