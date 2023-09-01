const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a idade em dias: ", (idadeEmDias) => {
  // Converte a entrada para um número inteiro
  idadeEmDias = parseInt(idadeEmDias);

  // Calcula os anos
  const anos = Math.floor(idadeEmDias / 365);

  // Calcula o resto dos dias após retirar os anos
  const diasRestantes = idadeEmDias % 365;

  // Calcula os meses
  const meses = Math.floor(diasRestantes / 30);

  // Calcula os dias restantes
  const dias = diasRestantes % 30;

  console.log(`${anos} anos, ${meses} meses e ${dias} dias.`);

  rl.close();
});


