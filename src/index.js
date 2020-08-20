import React from "react";
import ReactDOM from "react-dom";
import { Heading4, Bold } from "./Heading4";
import List from "./list";
//import Bold from "./Heading4";

const imgSrc = "https://picsum.photos/200";
const picsum =
  "https://picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I";

const customStyle = {
  color: "green",
  fontSize: "20px",
  border: "dashed 1px"
};

ReactDOM.render(
  <div>
    <h1 style={customStyle}>TEST</h1>
    <Heading4></Heading4>
    <h2 className="heading2">YES</h2>
    <img alt="puppy" src="{imgSrc}"></img>
    <img alt="puppy" src="{picsum}"></img>
    <List />
    <Bold>WOW</Bold>
  </div>,
  document.getElementById("root")
);
