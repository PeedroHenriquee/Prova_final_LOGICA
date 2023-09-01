const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularDivisao(x, y) {
  if (y === 0) {
    return "divisao impossivel";
  } else {
    return (x / y).toFixed(1);
  }
}

rl.question("Digite a quantidade de pares de valores: ", (quantidade) => {
  const resultados = [];

  function lerProximoPar(i) {
    if (i === quantidade) {
      // Todos os pares de valores foram lidos, imprimir resultados
      resultados.forEach((resultado) => {
        console.log(resultado);
      });
      rl.close();
    } else {
      rl.question(`Digite o par de valores ${i + 1} (X e Y separados por espaço): `, (entrada) => {
        const [x, y] = entrada.split(" ").map(Number);
        resultados.push(calcularDivisao(x, y));
        lerProximoPar(i + 1);
      });
    }
  }

  lerProximoPar(0);
});
