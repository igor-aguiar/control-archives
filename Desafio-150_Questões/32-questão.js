var alunos = [{
    nome: "Igor",
    idade: 32,
    notas: [7,9,3,8]
},
{
    nome: "Elayne",
    idade: 32,
    notas: [8,8,9,10]
},
{
    nome: "Rafael",
    idade: 27,
    notas: [6,6,7,9]
},
{
    nome: "Renan",
    idade: 34,
    notas: [7,9,3,8]
}]

var newArr = alunos.map(aluno => {
    return aluno.nome;
});

console.log(newArr);