import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { StoreProvider } from 'store/store';
import Login from './login';

function InitApplication() {
    return (
        <StoreProvider>
            <Login />
        </StoreProvider>
    );
}

ReactDOM.render(<InitApplication />, document.getElementById('root'));
