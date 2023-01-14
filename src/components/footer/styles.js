import styled from "styled-components";

export const RodapeStyled = styled.footer`
  background-image: linear-gradient(to right, #0b3c5d, #083263);
  color: white;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 0 30px;

  .redes-social {
    display: flex;
    align-items: flex-end;
  }

  .informacao{
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .listas{
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    line-height: 30px;
  }

  .imagemFooter{
    height:100px;


  }

`;