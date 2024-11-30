import React, {useState} from "react";

const TodoListRevisao = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa(){
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  }
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        name="tarefa"
        id="tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button type="button" onClick={adicionarTarefa}>
        Adicionar tarefa
      </button>

      <ul>
        {tarefas.map( valorTarefa => (
            <li>{valorTarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListRevisao;
