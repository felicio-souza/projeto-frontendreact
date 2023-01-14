import React from 'react'
import { RodapeStyled } from './styles'
import git from "../../assents/gitHub.png"

const Footer = () => {
  return (
    <>
      <RodapeStyled>
        <div className="listas">
          <ul className="informacao">
            <h4>
              <strong>Pagamento</strong>
            </h4>
            <li>Cartão de crédito</li>
            <li>Cartão de débito</li>
            <li>Boleto e Pix</li>
          </ul>
          <ul className="informacao">
            <h4>
              <strong>Em que posso ajudar</strong>
            </h4>
            <li>Sua conta</li>
            <li>Frete e prazo de entrega</li>
            <li>Devolução e reembolso</li>
            <li>Fale conosco </li>
          </ul>
        </div>

        <div>
          <h3> Felicio Souza</h3>{" "}
        </div>

        <div className="redes-social">
          <a href="https://github.com/felicio-souza?tab=repositories" target={"_blank"}>
            <img className='imagemFooter' src={git} alt="icone gitHub" rel="noopener noreferrer" />
          </a>
          
        </div>
      </RodapeStyled>
    </>
  )
}

export default Footer
