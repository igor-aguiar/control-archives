let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(isMultiploDeDois(numeros));

function isMultiploDeDois(conjunto){
    return conjunto.filter( valor => valor % 2 == 0);
}