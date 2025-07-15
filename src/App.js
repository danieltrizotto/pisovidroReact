import React,{ useEffect } from 'react';
import './App.css'; // se quiser estilizar com CSS externo


function App() {
 useEffect(() => {
    document.getElementById("botao").addEventListener("click", function () {
      var rodada = 1;

      while (rodada <= 3) {
        console.log("Rodada: " + rodada);

        var escolhaJogador = prompt("nível:" + rodada + " / escolha um piso : 1 - 2 - 3");

        if (escolhaJogador > 3 || escolhaJogador === 0) {
          alert("opção inválida");
          continue;
        }

        var pisoQuebrado = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador === pisoQuebrado) {
          alert("você escolheu vidro, game over");
          break;
        } else {
          alert("você escolheu piso certo, continue, o vidro estava no " + pisoQuebrado);
        }

        rodada = rodada + 1;
      }

      if (rodada > 3) {
        alert("você não quebrou o vidro em 3 rodadas, você venceu!");
      }
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <h2>Pra ganhar, é preciso coragem!</h2>
          <p>Até mesmo para pisar em um chão feito de vidro</p>
          <button id="botao" >Bora jogar!</button>
        </div>
      </div>

      <footer>Alura - Imersão DEV - 2025</footer>
    </div>
  );
}

export default App;
