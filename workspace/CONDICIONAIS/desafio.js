
/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variaveis. Sendo elas:
  1 - Preço do etanol;
  2 - Preço da gasolina;
  3 - O tipo de combustivel que está no seu carro;
  4 - Gasto médio de combustivel do carro por KM;
  5 - Distancia em KM da viagem;
  
Imprima no console o valor que será gasto para realizar esta viagem.]
*/

const precoGasolina = 6.51;
const precoEtanol = 3.41;
const kmPorLitros = 30;
const distanciaEmKm = 40;
const tipoCombustivel = 'Gasolina';
const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
    const litrosConsumidos = distanciaEmKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2))
 }


;




