import './App.css';
import React, {useState} from "react";
import Header from "./Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestVariants from "./Tests/TestVariants/TestVariants";
import Sidebar from "./Sidebar/Sidebar";
import TestMap from "./Tests/TestMap/TestMap";
import Section from "./Sections/Section";

function App() {
    const [mainPage, setMainPage] = useState(true);

    return (
        <div className="App">
                <Header/>
                <Sidebar/>
                <div className={"content"}>
                    <Routes>
                        <Route path={"/"} element={<TestMap />} />
                        <Route path={"sections"} element={<Section />} />
                    </Routes>
                </div>
        </div>
    );
}

export default App;
