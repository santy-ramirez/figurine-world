import { createRef } from "react";
import "./App.css";
import Figurite from "./components/Figurite";
import Pdf from "react-to-pdf";
import React from "react";
import { Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

const ref = createRef();
function App() {
  return (
    <div className="App">
      <Routes>
        <Router to="home" element={<Home />}></Router>
      </Routes>
    </div>
  );
}

export default App;
