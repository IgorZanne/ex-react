import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";

ReactDOM.render(
  <Family lastName="Zanne">
    <Member name="Igor" />
  </Family>,
  document.getElementById("app")
);
