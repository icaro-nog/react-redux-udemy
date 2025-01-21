import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
 
const Content = props => (
  <main className="Content">
    <Routes>
      <Route 
        path="/about" 
        element={<About />} 
      />
      <Route 
        path="/param/:id" 
        element={<Param />} 
      />
      <Route 
        path="/" 
        element={<Home />} 
        exact
      />
    </Routes>
  </main>
);
 
export default Content;