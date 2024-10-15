let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(numerosMenoresQueTrinta(numeros));

function numerosMenoresQueTrinta(arr){
    return arr.filter(num => num < 30);
}
