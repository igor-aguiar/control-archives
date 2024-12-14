import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

var url = "http://localhost:3000/";

const Resenhas = () => {
  const [resenhas, setResenhas] = useState([]);

  /* 
  Pegas as resenhas no back end
  esse useEffect vai ser executado quando a página for carregada.
 
  */

  useEffect(() => {
    axios
      .get(url + "resenhas")
      .then((response) => setResenhas(response.data))
      .catch((error) => console.error("erro ao carregar as resenhas ", error));
  }, []);
  return (
    <div>
      <h1>Resenhas de Livros</h1>
      {resenhas.map((resenha) => (
        <div key={resenha.id}>
          <a href={`/visualiza-resenha/${resenha.id}`}><h2>{resenha.tituloLivro}</h2></a>
          <h3>{resenha.autor}</h3>
          <p>{resenha.resumo}</p>
        </div>
      ))}
    </div>
  );
};

export default Resenhas;
