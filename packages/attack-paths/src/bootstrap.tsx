import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { StoreProvider } from "shared/shared";
import AttackPaths from "./attackPaths";

function InitApplication() {
    return (
        <StoreProvider>
            <AttackPaths />
        </StoreProvider>
    );
}

ReactDOM.render(<InitApplication />, document.getElementById("root"));
