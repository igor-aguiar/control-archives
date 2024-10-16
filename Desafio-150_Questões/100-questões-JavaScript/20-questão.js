var arr = [3,3,3,3,3,3];

console.log(definirMediaArray(arr))

function definirMediaArray(conjunto){
    let soma = conjunto.reduce((agregador, valor) => agregador + valor);
    return soma/conjunto.length;
}
