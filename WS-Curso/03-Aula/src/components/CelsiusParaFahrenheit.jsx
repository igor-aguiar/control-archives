import React from 'react'

const CelsiusParaFahrenheit = ({temperatura}) => {
  return (
    <div>
        <h1>{temperatura} ºC é igual a {(temperatura * (9/5) + 32).toFixed(2)} ºF</h1>
    </div>
  )
}

export default CelsiusParaFahrenheit