import {BrowserRouter, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {Home} from "./components/HomePage";
import {ListAddresses} from "./components/ListAddresses";
import {FormAddress} from "./components/FormAddress";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="addresses" element={<ListAddresses/>}/>
                    <Route path="formAddress" element={<FormAddress/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
