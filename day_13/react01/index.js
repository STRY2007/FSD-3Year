const heading = React.createElement(
    "div",
    { id: "outer-div" },
    React.createElement(
        "div",
        { id: "inner-div" },
        [
            React.createElement("h1", { id: "heading1" }, "hello ! react learner"),
            React.createElement("h1", { id: "heading2" }, "hello ! react learner"),
            React.createElement("h1", { id: "heading3" }, "hello ! react learner"),
            React.createElement("h1", { id: "heading4" }, "hello ! react learner")
        ]
    )
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);