import React from 'react'

const QuilometroParaMilhas = ({distancia}) => {
  return (
    <div>
        <h1>{distancia} KM é igual a {(distancia * 0.621371).toFixed(2)} milhas</h1>
    </div>
  )
}

export default QuilometroParaMilhas