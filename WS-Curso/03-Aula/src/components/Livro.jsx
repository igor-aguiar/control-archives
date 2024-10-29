import React from "react";

const Livro = ({ titulo, autor, ano }) => {
  return (
    <div>
      <h2>Titulo: {titulo}</h2>
      <p>Autor: {autor}</p>
      <p>Ano publicação: {ano}</p>
    </div>
  );
};

export default Livro;
