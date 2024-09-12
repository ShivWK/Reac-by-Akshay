import React from 'react';
import ReactDOM from 'react-dom/client';

let element = React.createElement(
    'div',
    { className: "Parent", id: "mine" },
    React.createElement(
        "div",
        { className: "Child" }, [
            React.createElement("h1", { id: "mine" }, "Hi I'm Shivendra Dwivedi"),
            React.createElement("h2", {}, "hi i'm second h2")
        ]
    )
);

// console.log(element)
const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(root)

root.render(element)