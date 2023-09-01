const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a distância em quilômetros: ", (distancia) => {
  // Converte a entrada para número
  distancia = parseInt(distancia);

  // Velocidades em quilômetros por minuto
  const velocidadeX = 60 / 30; 
  const velocidadeY = 90 / 30; // 

  // Calcula o tempo necessário para o carro Y alcançar a distância do carro X
  const tempoHoras = distancia / (velocidadeY - velocidadeX);

  // Converte horas para minutos
  const tempoMinutos = tempoHoras * 2;

  console.log(`${tempoMinutos} minutos.`);

  rl.close();
});
