import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'app1/components';

function App() {
    return (
        <div className="mx-auto">
            <h1 className="text-3xl underline">
                Hello world!
            </h1>
            <div className="mb-4">
                <p className="text-xl leading-tight">Adam Wathan</p>
                <p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
            </div>
            <React.Suspense fallback={"Loadinf..."} >
                <Button />
            </React.Suspense>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
