import React from "react";
import ReactDom from "react-dom";
const headingEl = React.createElement("h2", { className: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingEl);
