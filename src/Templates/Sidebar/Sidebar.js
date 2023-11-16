import React from 'react';
import classes from "./Sidebar.module.css"
import {Link, useLocation} from "react-router-dom";
import {Sidebar as ProSidebar, Menu, MenuItem, useProSidebar,} from "react-pro-sidebar";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapIcon from '@mui/icons-material/Map';
import AppsIcon from '@mui/icons-material/Apps';

const Sidebar = (props) => {
    const location = useLocation();
    const {collapseSidebar, toggleSidebar, toggled} = useProSidebar();
    let state_for_map;

    if (location.pathname === "/") {
        state_for_map = true
    } else if (location.pathname === "/section2") {
        state_for_map = true
    } else if (location.pathname === "/section3") {
        state_for_map = true
    } else if (location.pathname === "/section4") {
        state_for_map = true
    }

    return (
        <div className={classes.content_sidebar}>
            <ProSidebar style={{height: "100vh"}}>
                <Menu>
                    <MenuItem icon={<MenuOutlinedIcon/>} onClick={() => {
                        collapseSidebar();
                    }} style={{textAlign: "center"}} id={classes["sidebar_toggle"]}> {" "}
                        <h2>Duplo</h2>
                    </MenuItem>
                    <MenuItem icon={<MapIcon/>} component={<Link to={props.sidebarLinkMap}/>}
                              className={state_for_map ? classes.sidebar_link_active : classes.sidebar_link_nonactive}>
                        Карта
                    </MenuItem>
                    <MenuItem icon={<AppsIcon/>} component={<Link to="/sections"/>}
                              className={location.pathname === "/sections" ? classes.sidebar_link_active : classes.sidebar_link_nonactive}>
                        Секции
                    </MenuItem>
                    <MenuItem icon={<ReceiptOutlinedIcon/>} component={<Link to="/todo"/>}
                              className={location.pathname === "/todo" ? classes.sidebar_link_active : classes.sidebar_link_nonactive}>
                        Обратная связь
                    </MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon/>} component={<Link to="/diagram"/>}
                              className={location.pathname === "/diagram" ? classes.sidebar_link_active : classes.sidebar_link_nonactive}>
                        Диаграмма
                    </MenuItem>
                    {/*<MenuItem icon={<CalendarTodayOutlinedIcon/>}>Calendar</MenuItem>*/}
                </Menu>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
