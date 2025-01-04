import React from "react";
import FornecedorList from "./pages/Fornecedor/FornecedorList";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <FornecedorList />
      </BrowserRouter>
    </div>
  );
};

export default App;