import React from "react";
import "./App.css";
import HookContador from "./components/HookContador";
import TodoList from "./components/TodoList";

const App = () => {
  /* const libros = [
    {
      titulo: "Primeiro livro",
      autor: "Igor",
      ano: 1992,
    },
    {
      titulo: "Segundo Livro",
      autor: "Rafael",
      ano: 1842,
    },
    {
      titulo: "terceiro livro",
      autor: "josé",
      ano: 1854,
    }
  ]; */

  return (
    <div className="container">
      <TodoList />
    </div>
  );
};

export default App;
