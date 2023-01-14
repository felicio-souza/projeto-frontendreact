import React from 'react'
import CardCarrinho from '../../cardCarrinho/CardCarrinho';
import { CarrinhoPageStyled } from './styles';
import vazio from "../../../assents/vazio.png"




const CarrinhoPage = ({carrinho, adicionaQuantidadeNoCarrinho,
  diminuiQuantidadeNoCarrinho,
  deletaDoCarrinho}) => {

  const total = carrinho.reduce(
    (acc, produto) => produto.value * produto.quantidade + acc,
    0
  );

  return (
    <CarrinhoPageStyled>
      
      <section>
      <div className='espaco'></div>
        <h1 className='textoTitulo'>Carrinho</h1>
        <hr />
        {carrinho.map((produto) => (
          <CardCarrinho produto={produto} key={produto.id}
          adicionaQuantidadeNoCarrinho={adicionaQuantidadeNoCarrinho}
          diminuiQuantidadeNoCarrinho={diminuiQuantidadeNoCarrinho}
          deletaDoCarrinho={deletaDoCarrinho}
           />
        ))}
        <hr />
      </section>
      {carrinho.length >= 1 && (
        <section className="valor-total">
          <h3> Valor Total: R$ {total.toFixed(2).replace(".", ",")}</h3>
        </section>
      )}
      {carrinho.length === 0 && 
        <div className="vazio">
        <h2 className="textoTitulo">Carrinho Vazio</h2>
        <img src={vazio} alt="não visivel" id='home'/>  
        </div>}
    </CarrinhoPageStyled >
  )
      }
export default CarrinhoPage
