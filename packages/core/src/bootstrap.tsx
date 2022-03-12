import './styles.css';

import React, { useCallback } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";


const AttackChains = React.lazy(() => import('app2/attackChains'));
const Login = React.lazy(() => import('app3/attackChains'));


import { StoreProvider, useStore } from 'store/store';
import {useLogin} from "../../store/src/store";

function Home() {
    return (
      <div>
        <Link to="/login">Login</Link>
      <Link to="/attack-chains">Attack Chains</Link>
      </div>
    );
}

function RoutedLogin() {
    const { login, setEmailAndPassword, doLogin } = useStore();
    // const { signIn } = useLogin();
    const navigate = useNavigate();
    // console.log(signIn)


    const handleLogin = useCallback((payload: any) => {
        doLogin('42', '42')
        setEmailAndPassword(payload);
        navigate('/attack-chains');
    }, [doLogin, navigate, setEmailAndPassword]);

    return <Login onLogin={handleLogin} />
}

const He = () => (<div>42</div>);

function App() {
    return (
        <div className="h-full w-full">
            <React.Suspense fallback="loading...">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/attack-chains" element={<AttackChains />} />
                    <Route path="/login" element={<RoutedLogin />} />
                </Routes>

            </BrowserRouter>
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

ReactDOM.render(<InitApplication />, document.getElementById('root'));
