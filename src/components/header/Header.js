import React from 'react'
import { Cabecalho } from './styles'
import casa from "../../assents/casinha.png"
import carro from "../../assents/carrinho.png"
import logomarca from "../../assents/logomarca.gif"


const Header = ({mudarPagina}) => {
  return (
    <Cabecalho>
      
      <img className='logo' src={logomarca} alt="não visivel" id='home'></img>
      
      <div className='incones'>
        <img className="passearTelas" src={casa} alt="não visivel" id='home'
        onClick={()=>{mudarPagina("home")}}
       />

        <img className="passearTelas" src={carro} alt="não visivel"
        onClick={()=>{mudarPagina("cart")}}
       />

      </div>
    </Cabecalho>
  )
}

export default Header
