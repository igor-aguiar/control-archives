import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicial from "./pages/Inicial";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Book-spot - Resenhas Literárias</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicial />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
