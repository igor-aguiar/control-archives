import React from "react"
import styles from "./Campanha.module.css"

const Campanha = (props) => {
  function defineMensagem(mes) {
    if (mes === '9') {
      return "Preveção ao suicidio";
    } else if (mes === '10') {
      return "Concientização sobre o câncer de mama";
    } else if (mes === '11') {
      return "Prevenção e combate ao cancer de prostata";
    }
  }

  function defineCorDeFundo(mes) {
    if (mes === '9') {
      return styles.setembro;
    } else if (mes === '10') {
      return styles.outubro;
    } else if (mes === '11') {
      return styles.novembro;
    }
  }
  return (
    <div className={defineCorDeFundo(props.mes)}>
      <h1>Se cuide!</h1>
      {defineMensagem(props.mes)}
    </div>
  );
};

export default Campanha;
