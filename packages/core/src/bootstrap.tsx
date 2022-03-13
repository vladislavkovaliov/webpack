import './styles.css';

import React  from 'react';
import ReactDOM from 'react-dom';

import {
    Routes,
    Route,
} from "react-router-dom";

const Login = React.lazy(() => import('login/login'));
const AttackChains = React.lazy(() => import('attackChains/attackChains'));

import { StoreProvider } from 'store/store';

function App() {
    return (
        <div className="h-full w-full">
            <React.Suspense fallback={<div />} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/attack-chains" element={<AttackChains />} />
                </Routes>
            </React.Suspense>
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

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

ReactDOM.render(<React.StrictMode><InitApplication /></React.StrictMode>, document.getElementById('root'));
