import React, { useState, useEffect} from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CarrinhoPage from "./components/pages/carrinhoPage/CarrinhoPage";
import HomePage from "./components/pages/homePage/HomePage";
import { GlobalStyled } from "./GlobalStyled";




function App() {

  const [carrinho, setCarrinho] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [pagina, setPagina] = useState("home");

  const addProdutoCarrinho = (produtoAAdicionar) => {
    const novoCarrinho = [...carrinho];
  
    const produtoAchado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoAAdicionar.id
    );
    if (!produtoAchado) {
      const novoProduto = {
        ...produtoAAdicionar,
        quantidade: 1,
      };
      setQuantidade(quantidade+1);
      novoCarrinho.push(novoProduto);
    } else{
      setQuantidade(quantidade+1)
      produtoAchado.quantidade++;
    }

    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify((novoCarrinho)))
    localStorage.setItem("quantidade", JSON.stringify((quantidade)))
    
    }
    const adicionaQuantidadeNoCarrinho = (produtoASomar) => {
      const novoCarrinho = [...carrinho];
      const produtoAchado = novoCarrinho.find(
        (produtoNoCarrinho) => produtoNoCarrinho.id === produtoASomar.id
      );
      
      produtoAchado.quantidade++;
  
      setQuantidade(quantidade+1);  
      setCarrinho(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      localStorage.setItem("quantidade", JSON.stringify(quantidade));
    };
  
    const diminuiQuantidadeNoCarrinho = (produtoADiminuir) => {
      const novoCarrinho = [...carrinho];
      const produtoAchado = novoCarrinho.find(
        (produtoNoCarrinho) => produtoNoCarrinho.id === produtoADiminuir.id
      );
  
      produtoAchado.quantidade--;
  
      setQuantidade(quantidade-1);
      setCarrinho(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      localStorage.setItem("quantidade", JSON.stringify(quantidade));
    };
  
    const deletaDoCarrinho = (produtoADeletar) => {
      const novoCarrinho = [...carrinho];
  
      const indexAchado = novoCarrinho.findIndex(
        (produtoNoCarrinho) => produtoNoCarrinho.id === produtoADeletar.id
      );
      setQuantidade(quantidade-carrinho[indexAchado].quantidade)  
      novoCarrinho.splice(indexAchado, 1);
      setCarrinho(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      localStorage.setItem("quantidade", JSON.stringify(quantidade-1));
    };
    useEffect(() =>{
      if (carrinho.length > 0){
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
      }
    }, [carrinho]);
  
    useEffect (() => {
      const listaJson = JSON.parse(localStorage.getItem("carrinho"));
      if (listaJson){
        setCarrinho(listaJson);
      }
    }, []);
  
    useEffect (() => {
      if(quantidade > 0){
        localStorage.setItem("quantidade", JSON.stringify(quantidade));
      }
    }, [quantidade]);
  
    useEffect (() => {
      const listaJson = JSON.parse(localStorage.getItem("quantidade"));
      if (listaJson){
        setQuantidade(listaJson);
      }
    }, []);
  
  

  const mudarPagina = (tela)=>{
  setPagina(tela)

   }    
  
  const retornarPagina = ()=>{

      if(pagina === "home"){

        return ( 

        <>
        <GlobalStyled/>

          <Header mudarPagina={mudarPagina}  />
         
          <HomePage addProdutoCarrinho={addProdutoCarrinho} />
            <Footer/>        
        </>)
      }else if(pagina === "cart"){

        return (
         <>
         <GlobalStyled/>
          <Header 
          mudarPagina={mudarPagina}
          />
          <CarrinhoPage 
          carrinho={carrinho}
          adicionaQuantidadeNoCarrinho={adicionaQuantidadeNoCarrinho}
          diminuiQuantidadeNoCarrinho={diminuiQuantidadeNoCarrinho}
          deletaDoCarrinho={deletaDoCarrinho}
          

           />
           <Footer/> 
        </>)
      }
    }

  return (
        retornarPagina()
   
  );
}

export default App;
