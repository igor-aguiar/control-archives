import React, { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = ' http://localhost:3000/';

const AdicionarAluno = () => {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");

  const handle = (event) => {
    event.preventDefault();

    const dadosForm = {
      nome: nome, //Inserindo o valor do UseState no Objeto que vai para o banco de dados
      email: email, //Inserindo o valor do UseState no Objeto que vai para o banco de dados
      curso: curso, //Inserindo o valor do UseState no Objeto que vai para o banco de dados
    };

    enviarParaBackend(dadosForm);

  };
  const enviarParaBackend = async (dadosForm) => {
    const response = await axios.post("/alunos", dadosForm);
    console.log("Aluno cadastrado com sucesso");
    alert(`Aluno ${nome} cadastrado com sucesso`);

    setCurso("");
    setEmail("");
    setNome("");
  };

  return (
    <div>
      <h1>Cadastrar Aluno</h1>
      <form onSubmit={handle}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="curso">Curso:</label>
          <input
            type="text"
            name="curso"
            id="curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handle}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default AdicionarAluno;
