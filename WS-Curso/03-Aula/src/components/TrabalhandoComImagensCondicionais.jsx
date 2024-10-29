import React from "react";
import ImagemAsset from "../assets/assets-img.webp";

const TrabalhandoComImagensCondicionais = ({ origem }) => {
  const imagem = () => {
    if (origem == "asset") {
      return <img src={ImagemAsset} alt="Origem Asset" />;
    } else if (origem === "PUBLIC") {
      return <img src="public-img.webp" alt="Origem Public" />;
    }
  };
  return (
    <div>
      <h1>Imagem {origem}</h1>
      {imagem()}
    </div>
  );
};

export default TrabalhandoComImagensCondicionais;
