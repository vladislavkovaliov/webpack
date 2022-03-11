import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { Content } from './modules';
import { StoreProvider } from 'store/store';


import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";
import { Router } from 'express';

export interface AppProps {
    onLogin?: () => void;
}

export function App({ onLogin }: AppProps) {
    return (<div className="wrapper flex justify-center">
        <Content onLogin={onLogin} />
    </div> 
 
    );
}
function InitApplication() {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>
    );
}

ReactDOM.render(<InitApplication />, document.getElementById('root'));
