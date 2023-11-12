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

    function toLink(link) {
        window.location = link;
    }

    const toggle = () => {
        toggleSidebar();
        if (toggled) {
            console.log(true);
            collapseSidebar();
        } else {
            console.log(false);
            collapseSidebar();
        }
    };

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
        <div>
            <ProSidebar style={{height: "100vh"}}>
                <Menu>
                    <MenuItem icon={<MenuOutlinedIcon/>} onClick={() => {
                        collapseSidebar();
                    }} style={{textAlign: "center"}}> {" "}
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
                    <MenuItem icon={<ReceiptOutlinedIcon/>}>Profile</MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon/>}>FAQ</MenuItem>
                    <MenuItem icon={<CalendarTodayOutlinedIcon/>}>Calendar</MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
