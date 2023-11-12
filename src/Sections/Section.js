import React from 'react';
import classes from "./Section.module.css";
import {Link} from "react-router-dom";


const Section = (props) => {
    function onClickLink(link_id){
        props.setSidebarLinkMap(link_id)
    }
    return (
        <div className={classes.container}>
            <Link to={"/"} onClick={()=>onClickLink("/")}>Секция 1</Link> <br/>
            <Link to={"/section2"} onClick={()=>onClickLink("/section2")}>Секция 2</Link> <br/>
            <Link to={"/section3"} onClick={()=>onClickLink("/section3")}> Секция 3</Link> <br/>
            <Link to={"/section4"} onClick={()=>onClickLink("/section4")}> Секция 4</Link>
        </div>
    );
};

export default Section;
