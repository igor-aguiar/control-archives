var aluno = { nome: "Igor", cpf: "999.999.999-99", cidade: "João Pessoa", notas: [8,7,8,10] }

console.log(`Nome do Aluno: ${aluno.nome}, CPF: ${aluno.cpf}, Cidade: ${aluno.cidade}`);
console.log(`Notas: 1º - ${aluno.notas[0]}, 2º - ${aluno.notas[1]}, 3º - ${aluno.notas[2]}, 4º - ${aluno.notas[3]}`);

console.log(`Média: ${calcularMedia(aluno.notas)}`)
console.log(`Nota aleatória em escala de 100 = ${aluno.notas[Math.floor(Math.random() * aluno.notas.length)] * 10}`)

function calcularMedia(notas){
    let media = 0;
    notas.forEach(nota => {
        media += nota;
    });
    return (media/notas.length);
}