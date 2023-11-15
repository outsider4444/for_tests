import './App.css';
import React, {useState} from "react";
import Header from "./Header/Header";
import {Route, Routes, useLocation} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import TestMap from "./Tests/TestMap/TestMap";
import Section from "./Sections/Section";
import Todo from "./Todo/Todo";
import PieChartDemo from "./DiagramForTest/PieChartDemo";

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
                        <Route path={"todo"} element={<Todo/>}/>
                        <Route path={"diagram"} element={<PieChartDemo/>}/>
                    </Routes>
                </div>
        </div>
    );
}

export default App;
