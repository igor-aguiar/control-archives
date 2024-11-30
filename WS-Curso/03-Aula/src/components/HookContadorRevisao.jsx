import React, { useState } from 'react'


const HookContadorRevisao = () => {
    const [contador, setContador] = useState(1);
    function incrementaContador() {
        setContador(contador+1);
    }

    function decrementaContador() {
        if (contador > 0){
            setContador(contador-1);
        }
    }
  return (
    <div>
        <h1>Exemplo React hooks (useState) utilizando contador</h1>
        <h2>O contador esta em: {contador}</h2>

        <button type="button" onClick={incrementaContador}>Incrementar</button>
        <button type="button" onClick={decrementaContador}>Decrementar</button>
    </div>
  )
}

export default HookContadorRevisao