var arr = [1,2,3,4,5,6];

console.log(somaArray(arr));

function somaArray(conjunto){
    let soma = conjunto.reduce((agregador, valorAtual) => agregador + valorAtual);
    return soma;
}