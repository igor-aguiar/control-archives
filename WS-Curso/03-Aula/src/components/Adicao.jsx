import React from "react";

const Adicao = ({ num1, num2 }) => {
  const resultado = num1 + num2;
  return (
    <div>
      <h1>
        A soma de {num1} + {num2} é igual a {resultado}
      </h1>
    </div>
  );
};

export default Adicao;
