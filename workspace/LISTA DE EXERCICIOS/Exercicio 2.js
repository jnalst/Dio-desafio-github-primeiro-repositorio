/* 2) O IMC - Indice de Massa Corporal é um criterio da Organização Mundial de Saude para dar uma indicação
sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
 - Abaixo de 18.5 Abaixo do peso;
 - Entre 18.5 e 25 Peso normal;
 - Entre 25 e 30 Acima do peso;
 - Entre 30 e  40 Obeso;
 - Acima de 40 Obsesidade Grave;

 */

const imcPeso = 90
const imcAltura1 = 1.70
const imcAltura2 = 1.70

const resultadoImc = imcPeso / (imcAltura1 * imcAltura2)
console.log(resultadoImc)

if (resultadoImc < 18.5) {
    console.log('Abaixo do Peso');
} else if (resultadoImc >= 18.5 && resultadoImc <= 25) {
    console.log('Peso normal');
} else if (resultadoImc >= 25 && resultadoImc <= 30) {
    console.log('Acima do Peso')
} else if (resultadoImc >= 30 && resultadoImc <= 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade Grave')
}





