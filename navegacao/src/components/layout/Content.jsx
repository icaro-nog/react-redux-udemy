import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";
 
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
      <Route 
        path="*" 
        element={<NotFound />} 
      />
    </Routes>
  </main>
);
 
export default Content;