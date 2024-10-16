let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30, 55];


console.log(numerosMenoresQueTrintaCinco(numeros));

function numerosMenoresQueTrintaCinco(arr){
    return arr.filter(number => number < 35);
}