import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Gallery from "./components/Gallery";
import Scriptures from "./components/Scriptures";
import Navbar from "./components/Navbar";

const routing = (
  <Router>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/scriptures" element={<Scriptures />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
