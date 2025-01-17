import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 
const Content = props => (
  <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
    {/* --------------------------------------------------- */}
      <h1>tamo aqui</h1>
  </main>
);
 
export default Content;