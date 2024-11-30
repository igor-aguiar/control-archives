import React from 'react'
import style from './YearSeason.module.css'

const YearSeason = (props) => {
  function mensagem(season){
    if (season === 'summer'){
        return "Tempo de praia e sol"
    }else if (season === 'winter'){
        return "Época de frio e aconchego"
    } else if (season === 'fall'){
        return "Folhas caindo, outono chegando"
    } else if (season === 'spring'){
        return "Flores e cores, é primavera"
    }
  }

  function defineStyle(season){
    if (season === 'summer'){
        return style.summer
    }else if (season === 'winter'){
        return style.winter
    } else if (season === 'fall'){
        return style.fall
    } else if (season === 'spring'){
        return style.spring
    }
  }
    return (
    <div className={defineStyle(props.season)}>
        {mensagem(props.season)}
    </div>
  )
}

export default YearSeason