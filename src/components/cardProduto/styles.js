import styled from "styled-components";

export const PerfilProdutoStyled = styled.section`
 
  width: 280px;
  height: 460px;
  background: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 40px;
  flex-direction: column;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 1px 2px 5px grey;
  
  
  


  img {
    width: 150px;
    border-radius: 20px;
    z-index: 2;
  }

 
  h3 {
    position: relative;
    z-index: 2;
    font-size: 1.1rem;
    font-weight: 200;
    margin: 0 20px;
  }

  /* button {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 17px;
    padding: 0.8em 1.3em 0.8em 0.9em;
    color: white;
    background: green;
    border: none;
    letter-spacing: 0.05em;
    border-radius: 16px;
    z-index: 2;
    cursor: pointer; */
  button {
  min-width: 150px;
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 500;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  }

button::before {
content: '';
  border-radius: 1000px;
  min-width: calc(150px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

button:hover, .button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before, button:focus::before {
  opacity: 1;
}

button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after, button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}
  button svg {
    margin-right: 3px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }

  button span {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }

  button:hover svg {
    transform: translateX(5px) rotate(90deg);
  }

  button:hover span {
    transform: translateX(7px);
  }
  
  `