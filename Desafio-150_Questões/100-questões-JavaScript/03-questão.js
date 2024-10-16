/*As variáveis nomeAluno e matricula devem estar em um escopo global. A variável curso deve estar dentro de uma função. A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando template literals ${var}. */
var nomeAluno = "Igor";
const matricula = "1244-6";

function getAlunoInfo(nome, mat){
    let curso = "Dev Full-stack Prof. Kelson";

    return (`Aluno: ${nome} | Curso: ${curso} | Matricula: ${mat}`)
}

console.log(getAlunoInfo(nomeAluno, matricula));