import React, {useState} from "react";

const FormularioContato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dadosForm = {
        nome: nome,
        email: email,
        mensagem: mensagem
    }

    const jsonParaEnviarAoBakcend = JSON.stringify(dadosForm);

    console.log(jsonParaEnviarAoBakcend)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem</label>
          <input
            type="textarea"
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioContato;
