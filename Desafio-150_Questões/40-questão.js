let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(numerosMaioresQueDez(numeros))

function numerosMaioresQueDez(arr){
    return arr.filter(numero => numero >= 10);
}