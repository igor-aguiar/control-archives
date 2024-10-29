import React from 'react'
import ImagemAsset from '../assets/assets-img.webp'

const TrabalhandoComImagens = () => {
  return (
    <div>
        <img src="public-img.webp" alt="Imagem na pasta Public" />
        <img src={ImagemAsset} alt="Imagem do Asset" />
    </div>
  )
}

export default TrabalhandoComImagens