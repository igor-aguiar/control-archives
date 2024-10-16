let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(multiplicaPorDez(numeros));

function multiplicaPorDez(conjunto){
    return conjunto.map(number => number * 10)
}
