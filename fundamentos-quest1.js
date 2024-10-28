const dataAtual = new Date();
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const diaDaSemana = diasDaSemana[dataAtual.getDay()];
const horaAtual = dataAtual.toTimeString().slice(0, 8);

console.log(`Hoje é: ${diaDaSemana}.`);
console.log(`A hora atual é: ${horaAtual}.`);
