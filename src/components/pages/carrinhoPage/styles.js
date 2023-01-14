import styled from "styled-components";

export const CarrinhoPageStyled = styled.main`
  min-height: calc(100vh - 200px);

  .carrinho {
    padding: 20px;
   
   
  }
  .container-produtos {
    display: flex;
    flex-wrap: wrap;
  }
  .valor-total {
    display: flex;
    justify-content: flex-end;
    padding: 40px;
  }
  .espaco{

    height: 50px;
    background-image: linear-gradient(to right, #0b3c5d, #083263)
    
  }

  .textoTitulo{
    text-align: center;
  }

  .vazio{
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
