import React, {useState} from 'react';
import classes from "./Sidebar.module.css"
import {Link, useLocation} from "react-router-dom";
import {Button} from "react-bootstrap";
import { Sidebar as ProSidebar, Menu, MenuItem, useProSidebar,  } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Sidebar = () => {
    const [sidebarName, setSidebarName] = useState(classes.sidebar);
    const location = useLocation();
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    function toLink(link){
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

    return (
        <div>
            <ProSidebar style={{ height: "100vh" }}>
                <Menu>
                    <MenuItem icon={<MenuOutlinedIcon />} onClick={() => {
                        collapseSidebar();
                    }} style={{ textAlign: "center" }}> {" "}
                        <h2>Duplo</h2>
                    </MenuItem>
                    <MenuItem icon={<PeopleOutlinedIcon />} component={<Link to="/" />} className={location.pathname === "/" ? classes.sidebar_link_active : classes.sidebar_link_nonactive}>
                        Карта
                    </MenuItem>
                    <MenuItem icon={<ContactsOutlinedIcon />} component={<Link to="/sections" />} className={location.pathname === "/sections" ? classes.sidebar_link_active : classes.sidebar_link_nonactive}>
                        Секции
                    </MenuItem>
                    <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                    <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                </Menu>
            </ProSidebar>
        </div>
    );
};

export default Sidebar;
