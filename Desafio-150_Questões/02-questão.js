/*As variáveis produto e codigoProduto devem estar em um escopo global. A variável categoria deve estar dentro de uma função. A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha): Produto Categoria Código do Produto.*/
var produto = "Computador";
const codigoProduto = produto.substring(0,3).toUpperCase()+"1234";

function setCategoria(){
    let categoria = "Eletrônico";

    return categoria;
}

console.log(produto);
console.log(setCategoria());
console.log(codigoProduto);

console.log(`Item: ${produto} - ${setCategoria()}, Código: ${codigoProduto}`)