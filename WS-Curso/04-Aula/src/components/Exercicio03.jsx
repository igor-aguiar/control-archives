import React from 'react'

const Exercicio03 = () => {
    let isTrue = true;
  return (
    <div style={{
        color: isTrue ? '#ffa500' : '#008000',
        backgroundColor: isTrue ? '#808080' : '#ffff00',
        height: isTrue ? '150px' : '100px',
        margin: isTrue ? '20px' : '10px'

    }}>Exercicio03</div>
  )
}

export default Exercicio03