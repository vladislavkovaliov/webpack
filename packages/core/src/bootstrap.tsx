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


import { App as Login } from 'app1/login';
import { App as AttackChains } from 'app2/attackChains';

import { StoreProvider, useStore } from 'store/store';

function Home() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/attack-chains">Attack Chains</Link>
      </div>
    );
}

function RoutedLogin() {
    const { login, setEmailAndPassword } = useStore();
    const navigate = useNavigate();


    const handleLogin = useCallback((payload: any) => {
        setEmailAndPassword(payload);
        navigate('/attack-chains');
    }, []);

    return <Login onLogin={handleLogin} />
}

// export function PrivateRoute({ element, path, ...rest }: { element: React.ReactNode; path: string; }) {
//     const isAuth = false;
//     const navigate = useNavigate();

//     console.log(navigate)
//     return (
//         <Route 
//             {...rest}
//             element={() => 
//                 isAuth ? (element) : (null)
//             } 
//         />
//     );
// }

function App() {
    return (
        <div className="h-full w-full">
            <BrowserRouter>
            <React.Suspense fallback="loading...">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<RoutedLogin />} />
                    <Route path="/attack-chains" element={<AttackChains />} />
                    {/* <PrivateRoute path="/test" element={() => <div>42</div>} /> */}
                </Routes>
                </React.Suspense>

            </BrowserRouter>
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
