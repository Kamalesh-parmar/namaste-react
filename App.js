// const heading = React.createElement(
//   "h1", 
//   {id:"heading"},
//   "Hello World My Name is Kamalesh Parmar and I am learning React js"
// );

/*
<div>
  <div>
    <h1>Hari Om</h1>
  </div>
</div>

*/ 

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag")
  ]),

  React.createElement("div", { id:"child2" }, [
    React.createElement("h1", {}, "This is h1 tag from child2"),
    React.createElement("h2", {}, "This is h2 tag from child2")
  ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // This render converts React object into html element

// const heading = React.createElement("h1", {id:"heading"}, "Hello World My Name is Kamalesh from React js");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
// root.render(heading);