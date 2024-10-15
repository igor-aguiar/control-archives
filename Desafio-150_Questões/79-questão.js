let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(multipliccaPorSete(numeros));

function multipliccaPorSete(arr){
    return arr.map( num => num * 7);
}
