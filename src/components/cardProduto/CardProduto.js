import React from 'react'
import { PerfilProdutoStyled } from './styles'

const CardProduto = ({produto, addProdutoCarrinho}) => {


  return (
    
    <PerfilProdutoStyled>

        <img src={produto.imageUrl} alt=""/>
        
        <div>
            <h3>{produto.id}</h3>
            <h3>{produto.name}</h3>
            <h3>R$ {produto.value}</h3>

        </div>
        <button onClick={()=>{addProdutoCarrinho(produto)}}> comprar </button>



    </PerfilProdutoStyled>
  )
}

export default CardProduto