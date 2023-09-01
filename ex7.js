const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const musicas = [
  "PROXYCITY",
  "P.Y.N.G.",
  "DNSUEY!",
  "SERVERS",
  "HOST!",
  "CRIPTONIZE",
  "OFFLINE DAY",
  "SALT",
  "ANSWER!",
  "RAR?",
  "WIFI ANTENNAS"
];

rl.question("Digite a quantidade de casos de teste: ", (C) => {
  function tocarMusica(X, Y) {
    const soma = X + Y;
    if (soma >= 0 && soma <= 10) {
      return musicas[soma];
    } else {
      return "Música não encontrada";
    }
  }

  function lerProximoCaso(i) {
    if (i === C) {
      rl.close();
      return;
    }

    rl.question("Digite os números dos botões (X e Y separados por espaço): ", (entrada) => {
      const [X, Y] = entrada.split(" ").map(Number);
      const musica = tocarMusica(X, Y);
      console.log(musica);
      lerProximoCaso(i + 1);
    });
  }

  lerProximoCaso(0);
});
