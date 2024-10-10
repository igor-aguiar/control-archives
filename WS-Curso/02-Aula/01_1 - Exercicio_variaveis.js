var produto = "Computador";
const codigoProduto = produto.substring(0,3).toUpperCase()+"123";
var category = recuperaCategoria();

imprimirEtiqueta(produto, category, codigoProduto);

//exibe produto
function imprimirEtiqueta(prod, cat, codigo){
    console.log(`Produto: ${prod}
Categoria: ${cat}
Código Produto: ${codigo}`)

}

function recuperaCategoria() {
    let categoria = "Eletrônicos";

    return categoria;
}

