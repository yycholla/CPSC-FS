
"use strict";
const start = () => {
    const topElement = React.createElement(
    "h1",
        { className: "bg-danger text-warning text-center" },
        "Hello React!",
    );
    const root = ReactDOM.createRoot(document.getElementById("main"));
    root.render(topElement);
};
start();