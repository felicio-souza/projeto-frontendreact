import React from 'react'
import { Filtro } from './styles'
import lupa from "../../assents/lupa.png"
import ordem from "../../assents/ordem.png"
import valor from "../../assents/valor.png"
import numero from "../../assents/numero.png"
import limpar from "../../assents/limpar.png"

const Navbar = ({filtroTexto, setFiltroTexto,
filtroNumero, setFiltroNumero, filtroOrdem, setFiltroOrdem, 
valorMin, setValorMin,valorMax, setValorMax}) => {


  const buscarPorNumero = (e) => {
    setFiltroNumero(e.target.value);
  };

  const buscarNome = (e) => {
    setFiltroTexto(e.target.value);
  };

  const deixarEmOrdem =(e) => {
    setFiltroOrdem(e.target.value);
  };

  const buscarValorMin = (e) => {
    setValorMin(e.target.value);
  };

  const buscarValorMax = (e) => {
    setValorMax(e.target.value);

    
  };

  const limparCampos = () =>{
    setFiltroOrdem("");
    setFiltroTexto("");
    setValorMin ("");
    setValorMax("");
  };

 
  return (
    <Filtro>
      <div>
      <img className="passearTelas" src={numero} alt="não visivel" /> 
     <input className='texto'
      type="number" 
      placeholder="Buscar por numero" 
      onChange={buscarPorNumero}
      value={filtroNumero}
      
      
      />
      </div>  

      <div>
      <img className="passearTelas" src={valor} alt="não visivel" /> 
      <input className='texto'
      type="text" 
      placeholder="Preço minimo" 
      onChange={buscarValorMin}
      value={valorMin}
      />

    </div>    
    <div>
      <img className="passearTelas" src={valor} alt="não visivel" /> 
      <input className='texto'
      type="text" 
      placeholder= "Preço maximo" 
      onChange={buscarValorMax}
      value={valorMax}
      />
  </div>
  <div>
      <img className="passearTelas" src={ordem} alt="não visivel" />
      <select className='texto'
      onChange={deixarEmOrdem}
      value={filtroOrdem}
      >

        <option value="">Orden</option>
        <option value="crescente">crescente</option>
        <option value="decrescente">decrescente</option>
        
      </select>
    </div>
    <div>
      <img className="passearTelas" src={lupa} alt="não visivel" />
      <input className='pesquisa'
      type="text" 
      placeholder="Digite aqui o que voce procura" 
      onChange={buscarNome}
      value={filtroTexto}
      />
    </div>

    <div> limpar campos
      <img className="passearTelas" src={limpar} alt="não visivel"  id='pincel'
      onClick={limparCampos}/>
    </div>
    </Filtro>
  )
}

export default Navbar
