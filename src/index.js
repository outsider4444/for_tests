import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestVariants from "./Tests/TestVariants/TestVariants";
import {ProSidebarProvider} from "react-pro-sidebar";
import TestImages from "./Tests/TestImages/TestImages";
import Test from "./Tests/Test";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ProSidebarProvider>
      <BrowserRouter>
          <div className={"content"}>
              <Routes>
                  <Route path={"*"} element={<App />} />
                  <Route path={"test/*"} element={<Test />} />
              </Routes>
          </div>
      </BrowserRouter>
      </ProSidebarProvider>
  </React.StrictMode>
);

reportWebVitals();
