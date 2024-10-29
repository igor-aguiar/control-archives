import React, { useState } from "react";

const HookContador = () => {
  const [contador, setContador] = useState(1);

  function incrementarContador() {
    setContador(contador + 1);
  }
  function decrementarContador() {
    setContador(contador - 1);
  }

  return (
    <div>
      <h3>Contagem: {contador}</h3>
      <button onClick={incrementarContador}>Incrementar</button>
      <br />
      <button onClick={decrementarContador}>Decrementar</button>
    </div>
  );
};

export default HookContador;
