import React from "react";
import ReactDOM from "react-dom";

const myName = "Neal";

ReactDOM.render(
  <div>
    <h1>My practive attempt by {myName}</h1>
    <ul>
      <li>My lucky number {6 + 4}</li>
      <li>React</li>
      <li>Attempt</li>
    </ul>
  </div>,
  document.getElementById("root")
);
