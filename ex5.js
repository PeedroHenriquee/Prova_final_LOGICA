const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function determinarVencedor(jogador1, jogador2) {
  if (jogador1 === jogador2) {
    if (jogador1 === 'papel') {
      return "Ambos venceram";
    } else if (jogador1 === 'pedra') {
      return "Sem ganhador";
    } else if (jogador1 === 'ataque') {
      return "Aniquilacao mutua";
    }
  } else if (jogador1 === 'ataque' && jogador2 === 'pedra') {
    return "Jogador 1 venceu";
  } else if (jogador1 === 'pedra' && jogador2 === 'ataque') {
    return "Jogador 2 venceu";
  } else if (jogador1 === 'papel' && jogador2 === 'ataque') {
    return "Jogador 2 venceu";
  } else if (jogador1 === 'ataque' && jogador2 === 'papel') {
    return "Jogador 1 venceu";
  } else if (jogador1 === 'papel' && jogador2 === 'pedra') {
    return "Jogador 1 venceu";
  } else if (jogador1 === 'pedra' && jogador2 === 'papel') {
    return "Jogador 2 venceu";
  }
  return "Sem ganhador";
}

rl.question("Digite a quantidade de casos de teste (N): ", (N) => {
  let casosDeTesteLidos = 0;

  function lerProximoCasoDeTeste() {
    if (casosDeTesteLidos === N) {
      rl.close();
      return;
    }

    rl.question("Escolha do Jogador 1: ", (jogador1) => {
      rl.question("Escolha do Jogador 2: ", (jogador2) => {
        const resultado = determinarVencedor(jogador1, jogador2);
        console.log(resultado);
        casosDeTesteLidos++;
        lerProximoCasoDeTeste();
      });
    });
  }

  lerProximoCasoDeTeste();
});
