let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(divideNumerosPorDois(numeros));

function divideNumerosPorDois(arr){
    return arr.map(num => num/2);
}