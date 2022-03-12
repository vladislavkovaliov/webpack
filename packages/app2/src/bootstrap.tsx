import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';



import { StoreProvider, useStore } from 'store/store';

const URL = "https://api.orcasecurity.io/api"

interface IModel {
    model: {
        data: {
            AttackChain: {
                Title: string;
            }
        }
    }
};

export default function App() {
    const { login, setEmailAndPassword } = useStore();
    const [ models, setModels] = useState<IModel[]>([]);


    useEffect(() => {
        const init = async () => {
            try {
                const response = await fetch(URL + '/sonar/query' + '?query=AttackChain+with+IsLive%3DTrue&enable_pagination=true&standard_format=true', {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${login.jwt}`,
                    },
                });
                const json = await response.json();
                setModels(json.data.models);
            } catch(e) {}
        };

        init();
    }, [login.jwt]);
    console.log(models);
    return (
        <div className="h-full w-full">
           {models.map(({ model: { data: { AttackChain: { Title } } }}) => (<div>{Title}</div>))}
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
