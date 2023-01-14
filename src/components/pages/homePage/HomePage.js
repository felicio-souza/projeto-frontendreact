import React, { useState } from 'react'
import produtos from "../../../assents/produtos.json"
import CardProduto from '../../cardProduto/CardProduto'
import { PerfilHomePageStyled } from './styles'
import NavBar from "../../navBar/NavBar";


const HomePage = ({addProdutoCarrinho}) => {

  const [filtroTexto, setFiltroTexto] = useState("");
  const [filtroNumero, setFiltroNumero] = useState("");
  const [filtroOrdem, setFiltroOrdem] = useState("");  
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
 


  return (
    <>
    <NavBar
      filtroTexto = { filtroTexto} 
      setFiltroTexto ={setFiltroTexto}
      filtroNumero={filtroNumero}
      setFiltroNumero ={setFiltroNumero}
      filtroOrdem={filtroOrdem}
      setFiltroOrdem={setFiltroOrdem}
      valorMin={valorMin}
      setValorMin={setValorMin}
      valorMax={valorMax}
      setValorMax={setValorMax}
    />
    <PerfilHomePageStyled>
      {produtos.filter((produto) => {
          return filtroNumero ? produto.id.includes(filtroNumero) : produto
        })
        
        .filter((produto) => {
          return produto.name.toLowerCase().includes(filtroTexto.toLowerCase());
        })
        .filter((produto) => {
          return produto.value >= valorMin;
        })
        .filter((produto) => {
          return valorMax ? produto.value <= valorMax : produto;
        })
        .sort((produto1, produto2) => {
          if (filtroOrdem === "crescente") {
            if (produto1.value < produto2.value) {
              return -1;
            } else {
              return 1;
            }
          } else if (filtroOrdem === "decrescente") {
            if (produto1.value < produto2.value) {
              return 1;
            } else {
              return -1;
            }
          }
        })
          .map((produto) => {
            return (
              <CardProduto
              key={produto.id}
              produto={produto}
              addProdutoCarrinho={addProdutoCarrinho}
             
             
                 
                            
             
              /> 
            );
          })}
    </PerfilHomePageStyled>
    </>
  )
}

export default HomePage
