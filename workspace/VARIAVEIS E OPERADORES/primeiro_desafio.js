
/* Faça um programa para calcular o valor gasto de uma viagem.

Você terá 3 variaveis. Sendo elas:
- 1 Preço do combustível;
- 2 Gasto médio de combustível do carro por KM;
- 3 Distância em KM;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoCombustivel = 6.51;
const kmPorLitros = 30;
const distanciaEmKm = 40;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));






