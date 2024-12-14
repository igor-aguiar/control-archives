import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicial from "./pages/Inicial";
import Artigos from "./pages/Artigos";
import SobreNos from "./pages/SobreNos";
import VisualizarArtigo from "./pages/VisualizarArtigo";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Techhub - Artigos de tecnologia</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/visualizar-artigo/:id" element={<VisualizarArtigo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
