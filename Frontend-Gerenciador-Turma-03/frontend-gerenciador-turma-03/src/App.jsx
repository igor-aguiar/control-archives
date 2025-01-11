import React from "react";
import FornecedorList from "./pages/Fornecedor/FornecedorList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FornecedorForm from "./pages/Fornecedor/FornecedorForm";
import Navbar from "./components/Navbar";
import Inicial from "./pages/inicial";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/listar-fornecedores" element={<FornecedorList />} />
          <Route path="/add-fornecedores" element={<FornecedorForm />} />
          <Route path="/edit-fornecedores/:id" element={<FornecedorForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
