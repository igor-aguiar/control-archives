import React, { useState } from "react";

const TodoList = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  }

  return (
    <div>
      <h2>Lista de tarefas</h2>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar tarefa</button>

      <ul>
        {tarefas.map((registro, id) => (
          <li key={id}>{registro}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
