import {BrowserRouter, Route, Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {ListAddresses} from "./components/ListAddresses";
import {FormAddress} from "./components/FormAddress";
import {NotFound} from "./components/NotFound";
import {HomePage} from "./components/HomePage";
import {Address} from "./components/Address";
import {Provider} from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="addresses" element={<ListAddresses/>}/>
                    <Route path="formAddress" element={<FormAddress/>}/>
                    <Route path="addresses/item/:id" element={<FormAddress/>}/>
                    <Route path="addresses/item" element={<FormAddress/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
