import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header"
import Footer from "./Footer"

const App = () => (
  <div className="container">
    <Header/>
    <div className="my">Framework: react</div>
    
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
