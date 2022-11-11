
const nota = []

nota.push(5);
nota.push(10);
nota.push(8);

let soma = 0;

for (let i = 0; i < nota.length; i++) {
    const notaoficial = nota[i];
    soma = soma + notaoficial;
}

const media = soma / nota.length;

console.log(media)










