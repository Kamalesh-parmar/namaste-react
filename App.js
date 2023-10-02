import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "This is h2 tag")
  ]),

  React.createElement("div", { id:"child2" }, [
    React.createElement("h1", {}, "This is h1 tag from child2"),
    React.createElement("h2", {}, "This is h2 tag from child2")
  ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); 