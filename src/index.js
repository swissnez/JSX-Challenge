import React from "react";
import ReactDOM from "react-dom";
import Heading4 from "./Heading4";
import Bold from "./Heading4";

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
    <Bold>WOW</Bold>
  </div>,
  document.getElementById("root")
);
