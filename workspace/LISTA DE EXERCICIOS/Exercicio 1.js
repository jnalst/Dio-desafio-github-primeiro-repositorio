/* Faça um algoritimo que dado 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a 
sua media e sua classificação conforme tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:

 - Média menor que 5, reprovado;
 - Média entre 5 e 7 , recuperação;
 - Media acima de 7 , Aprovado para o semeste;

 */

const nota1 = 4;
const nota2 = 5;
const nota3 = 1;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Passou de semestre');
}

