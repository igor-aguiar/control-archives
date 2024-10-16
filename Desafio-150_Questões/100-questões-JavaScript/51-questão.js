let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(incrementaEmCinco(numeros));

function incrementaEmCinco(arr){
    return arr.map(number => number+5);
}
