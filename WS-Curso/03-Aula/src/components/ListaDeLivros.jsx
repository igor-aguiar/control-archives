import React from "react";
import Livro from "./Livro";

const ListaDeLivros = ({ livros }) => {
  return (
    <div>
      {livros.map((book, id) => (
        <Livro key={id} autor={book.autor} ano={book.ano} titulo={book.titulo} />
      ))
      }
    </div>
  );
};

export default ListaDeLivros;
