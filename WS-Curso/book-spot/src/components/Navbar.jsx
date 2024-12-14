import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <Link to='/'>Incial</Link>
        <br />
        <Link to='/sobre-nos'>Sobre nós</Link>
        <br />
        <Link to='/resenhas'>Resenhas</Link>
    </div>
  )
}

export default Navbar