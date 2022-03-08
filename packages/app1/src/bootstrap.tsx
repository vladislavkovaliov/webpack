import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { Content } from './modules';

function App() {
    return (
        <div className="wrapper flex justify-center">

            <Content />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
