import React from 'react'
import { CardCarrinhoStyled } from './styles';
import menos from "../../assents/menos.png"
import mais from "../../assents/mais.png"
import lixeira from "../../assents/lixeira.png"


const CardCarrinho = ({produto, adicionaQuantidadeNoCarrinho,
    diminuiQuantidadeNoCarrinho,
    deletaDoCarrinho}) => {

    const totalPorItem = (produto.value * produto.quantidade) 

    return (
      <CardCarrinhoStyled>
        <img
          className="image-produto"
          src={produto.imageUrl}
          alt={produto.imageAlt}
        />
        <div className="descricao-produto">
          <h3>{produto.name}</h3>
        </div>
        <div className="valor">
          <h3>R$ {produto.value.toFixed(2).replace(".", ",")}</h3>
        </div>
        <div className="divisao-buttons-subtotal">
          <div className="buttons">
            {produto.quantidade > 1 && (
              <img
                className="button-quantidade"
                id="menos"
                src={menos}
                alt="menos"
                onClick={() => diminuiQuantidadeNoCarrinho(produto)}
              />
            )}
            {
              <img
                className="button-quantidade"
                id="mais"
                src={mais}
                alt="mais"
                onClick={() => adicionaQuantidadeNoCarrinho(produto)}
              />
            }
            {<span>Quant: {produto.quantidade}</span>}
            {
              <img
                className="button-delete"
                id="lixeira"
                src={lixeira}
                alt="lixeira"
                onClick={() => deletaDoCarrinho(produto)}
              />
            }
          </div>
          <div className="totalDeItens">
            <h4>
              Subtotal ({produto.quantidade} itens) R${" "}
              {totalPorItem.toFixed(2).replace(".", ",")}
            </h4>
          </div>
        </div>
      </CardCarrinhoStyled>
    );
  }
  

export default CardCarrinho
