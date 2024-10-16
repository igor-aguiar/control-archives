let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(divisiveisPorOito(numeros));

function divisiveisPorOito(arr){
    return arr.filter(num => num % 10 == 0);
}
