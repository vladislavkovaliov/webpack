import React from "react";
import ReactDOM from "react-dom";

import Components from "./components";

function InitApplication() {
    return <Components />;
}

ReactDOM.render(<InitApplication />, document.getElementById("root"));
