import React from "react";
import ReactDOM from "react-dom";

const myName = "Neal";

let CurrentDate = new Date();

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="flase">
      My practive attempt by {myName}
    </h1>
    <ul>
      <li>My lucky number {6 + 4}</li>
      <li>React {}</li>
      <li>Attempt</li>
    </ul>
    <h3>{CurrentDate.getFullYear()}</h3>
  </div>,
  document.getElementById("root")
);
