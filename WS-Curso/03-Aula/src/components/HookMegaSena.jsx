import React, { useState } from 'react'

const HookMegaSena = () => {
    const [numeroSorteado, setNumeroSorteado] = useState()
    const [todosNumerosSorteados, setTodosNumerosSorteados] = useState([])

    function sortearNumero(){
        if (todosNumerosSorteados.length < 6){
            let numSort = Math.floor(Math.random()*60) + 1;
            setNumeroSorteado(numSort);
            setTodosNumerosSorteados([...todosNumerosSorteados, numSort])
        } else {
            alert("Já foram sorteado 6 numeros")
        }
    }

    
  return (
    <div>
        <h1>Sorteador da Mega-Sena em React</h1>
        <button onClick={sortearNumero}>Sortear Numero</button>

        <h1>Ultimo numero sorteado: {numeroSorteado}</h1>
        <h3>Sorteados: {todosNumerosSorteados.join(" - ")}</h3>
    </div>
  )
}

export default HookMegaSena