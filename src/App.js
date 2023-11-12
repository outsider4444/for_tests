import './App.css';
import React, {useState} from "react";
import Header from "./Header/Header";
import {Route, Routes, useLocation} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import TestMap from "./Tests/TestMap/TestMap";
import Section from "./Sections/Section";

function App() {
    const [sidebarLinkMap, setSidebarLinkMap] = useState("/");

    let location = useLocation();

    return (
        <div className="App">
                <Header/>
                <Sidebar sidebarLinkMap={sidebarLinkMap} />
                <div className={"content"}>
                    <Routes>
                        <Route path={"/"} element={<TestMap />} />
                        <Route path={"/section2"} element={<TestMap />} />
                        <Route path={"/section3"} element={<TestMap />} />
                        <Route path={"/section4"} element={<TestMap />} />
                        <Route path={"sections"} element={<Section setSidebarLinkMap={setSidebarLinkMap} />} />
                    </Routes>
                </div>
        </div>
    );
}

export default App;
