import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

var url = "http://localhost:3000/";

const VisualizaResenha = () => {
  const { id } = useParams();
  const [resenha, setResenha] = useState({});

  useEffect(() => {
    axios
      .get(url + "resenhas/" + id)
      .then((response) => setResenha(response.data))
      .catch((error) => console.error("Erro ao carregar a resenha ", error));
  }, [id]);
  
  return <div>
    <h2>{resenha.tituloLivro}</h2>
    <h3>Por: {resenha.autor}</h3>
    <p>{resenha.conteudoCompleto}</p>
  </div>;
};

export default VisualizaResenha;
