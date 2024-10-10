var notas = [5, 7, 9];
console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);
const calculaMedia = (not) => {
    let media = 0;
    not.forEach(nota => {
        media += nota;
    });

    return (media/not.length);
}
console.log(`Média: ${calculaMedia(notas)}`)
console.log(`O Aluno esta: ${calculaMedia(notas) >= 7  ? "APROVADO" : "REPROVADO"}`)