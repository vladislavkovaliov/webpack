import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

import { Route, Routes } from "react-router-dom";
import { StoreProvider } from "shared/shared";

import { PrivateRoute, Roles } from "./modules";
import { LoginPage } from "./pages";

const AttackPathsPage = React.lazy(() => import("attackPaths/attackPaths"));

function App() {
    return (
        <div className="h-full w-full">
            <React.Suspense fallback={<div />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/login"
                        element={
                            <LoginPage defaultPageRedirect="/attack-paths" />
                        }
                    />
                    <Route
                        path="/attack-paths"
                        element={
                            <PrivateRoute
                                roles={[Roles.Admin]}
                                component={AttackPathsPage}
                            />
                        }
                    />
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

ReactDOM.render(
    <React.StrictMode>
        <InitApplication />
    </React.StrictMode>,
    document.getElementById("root")
);
