import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";

import "./styles.css";

function App() {
  return (
    <div >
      <Home/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
