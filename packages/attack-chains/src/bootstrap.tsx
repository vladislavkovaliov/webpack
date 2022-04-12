import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { StoreProvider } from "store/store";
import AttackChains from "./attackChains";

function InitApplication() {
    return (
        <StoreProvider>
            <AttackChains />
        </StoreProvider>
    );
}

ReactDOM.render(<InitApplication />, document.getElementById("root"));
