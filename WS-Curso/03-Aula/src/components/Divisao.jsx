import React from 'react'

const Divisao = ({num1, num2}) => {
  const result = num1 / num2;
    return (
    <div>
        <h1>A Divisão entre {num1} / {num2} é igual a {result.toFixed(2)}</h1>
    </div>
  )
}

export default Divisao