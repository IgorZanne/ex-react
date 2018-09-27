import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";

ReactDOM.render(
  <Family lastName="Zanne">
    <Member name="Igor" />
    <Member name="João" />
    <Member name="Alfredo" />
  </Family>,
  document.getElementById("app")
);
