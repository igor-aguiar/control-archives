import React, { useState, useEffect } from "react";
import axios from "axios";

const ListarAlunos = () => {
  axios.defaults.baseURL = " http://localhost:3000/";

  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios
      .get("/alunos")
      .then((response) => {
        setAlunos(response.data);
      })
      .catch((error) => console.error("Ocorreu um erro", error));
  }, []);

  return (
    <div>
      {alunos.map((alun) => (
        <p key={alun.id}>
          {alun.nome} - {alun.email} - {alun.curso}
        </p>
      ))}
    </div>
  );
};

export default ListarAlunos;
