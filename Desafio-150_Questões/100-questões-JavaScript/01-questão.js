/*nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores. */
var nome = "Igor";
const cpf = "999.999.999-99";

function setSobrenome(){
    let sobreNome = "da Silva Aguiar";

    return sobreNome;
}

console.log(nome);
console.log(setSobrenome());
console.log(cpf);

console.log(`Nome: ${nome} ${setSobrenome()}, CPF: ${cpf}`)