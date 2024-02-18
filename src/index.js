import React, { useState } from "react";
import ReactDOM from "react-dom";
import Router from "./components/Navigation/Router";

 function App() {
  return (
    <Router />
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);