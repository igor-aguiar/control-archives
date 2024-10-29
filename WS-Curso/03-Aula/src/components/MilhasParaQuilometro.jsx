import React from "react";

const MilhasParaQuilometro = ({ distancia }) => {
  return (
    <div>
      <h1>
        {distancia} milhas é igual a {(distancia * 1.60934).toFixed(2)} KM
      </h1>
    </div>
  );
};

export default MilhasParaQuilometro;
