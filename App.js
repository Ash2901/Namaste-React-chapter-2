import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("div", { id: "heading", abc: "xyz" }, 
[React.createElement("h1", {},"Hello world by React"), 
React.createElement("h2", {}," Namaste React!")]);
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
root.render(heading);