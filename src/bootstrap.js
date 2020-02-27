import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "bootstrap/dist/css/bootstrap.css";
import "./static/assets/main.scss";

function main() {
  ReactDOM.render(<App />, document.querySelector(".app-wrapper"));
}

document.addEventListener("DOMContentLoaded", main);
