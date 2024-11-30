import React, {useState} from 'react'

const HookQuina = () => {
    const [numeroSorteado, setNumeroSorteado] = useState()
    const [todosNumerosSorteados, setTodosNumerosSorteados] = useState([])

    function sortearNumero(){
        let numSort = Math.floor(Math.random() * 80) + 1

        if (todosNumerosSorteados.length < 5 && !numeroJaFoiSorteado(numSort)){
            setNumeroSorteado(numSort)
            setTodosNumerosSorteados([...todosNumerosSorteados, numSort])
        } else {
            alert('Já foram sorteados todos os numeros')
        }
    }

    function numeroJaFoiSorteado(num){
        return todosNumerosSorteados.some( numero => numero === num);
    }
  return (
    <div>
        <h1>Sorteio Quina</h1>
        <h2>Numero Sorteado: {numeroSorteado}</h2>
        <button type="button" onClick={sortearNumero}>Sortear numero</button>
        <h3>Numeros Sorteados: {todosNumerosSorteados.join(' - ')}</h3>
    </div>
  )
}

export default HookQuina