const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vetorA = [];

function mostrarValoresMenoresOuIguaisA10() {
  for (let i = 0; i < 100; i++) {
    if (vetorA[i] <= 10) {
      console.log(`A[${i}] = ${vetorA[i].toFixed(1)}`);
    }
  }
  rl.close();
}

function lerProximoValor(i) {
  if (i === 100) {
    mostrarValoresMenoresOuIguaisA10();
  } else {
    rl.question(`Digite o valor ${i + 1}: `, (valor) => {
      vetorA.push(parseFloat(valor));
      lerProximoValor(i + 1);
    });
  }
}

lerProximoValor(0);
