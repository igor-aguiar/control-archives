let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(multiplicaPorTres(numeros));

function multiplicaPorTres(conjunto){
    return conjunto.map(valor => valor *3);
}