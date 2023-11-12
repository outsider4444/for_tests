import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProSidebarProvider} from "react-pro-sidebar";
import Test from "./Tests/Test";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className={"content"}>
                <ProSidebarProvider>
                    <Routes>
                        <Route path={"*"} element={<App/>}/>
                        <Route path={"test/*"} element={<Test/>}/>
                    </Routes>
                </ProSidebarProvider>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
