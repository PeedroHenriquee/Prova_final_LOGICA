const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const comitiva = {
  'X': 0, // hobbits
  'H': 0, // humanos
  'E': 0, // elfos
  'A': 0, // anões
  'M': 0  // magos
};

rl.question("Digite o número de pessoas que se alistaram: ", (N) => {
  function lerProximaPessoa(i) {
    if (i === N) {
      // Todos os registros foram lidos, imprimir relatório
      console.log(`${comitiva['X']} hobbits`);
      console.log(`${comitiva['H']} humanos`);
      console.log(`${comitiva['E']} elfos`);
      console.log(`${comitiva['A']} anões`);
      console.log(`${comitiva['M']} magos`);
      rl.close();
      return;
    }

    rl.question("Digite o nome e a raça (exemplo: Frodo X): ", (registro) => {
      const partes = registro.split(" ");
      const nome = partes[0];
      const raca = partes[1];

      if (comitiva[raca] !== undefined) {
        comitiva[raca]++;
      }

      lerProximaPessoa(i + 1);
    });
  }

  lerProximaPessoa(0);
});
