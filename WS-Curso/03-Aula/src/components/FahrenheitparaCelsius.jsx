import React from 'react'

const FahrenheitparaCelsius = ({temperatura}) => {
  return (
    <div>
        <h1>{temperatura} ºF é igual a {((temperatura - 32) * (5/9)).toFixed(2)} ºC</h1>
    </div>
  )
}

export default FahrenheitparaCelsius