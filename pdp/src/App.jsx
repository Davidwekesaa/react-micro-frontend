import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "container/Header"
import Footer from "container/Footer"

const App = () => (
  <div className="container">
    <Header/>
    <div className="my">pdp react</div>
    
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
