import React from 'react'

const Subtracao = ({num1, num2}) => {
    const result = num1 - num2;
    return (
    <div>
        <h1>A subtração de {num1} - {num2} é igual a {result}</h1>
    </div>
  )
}

export default Subtracao