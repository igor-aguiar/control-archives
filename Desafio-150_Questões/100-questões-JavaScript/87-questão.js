let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];


console.log(multipliccaPorQuatro(numeros));

function multipliccaPorQuatro(arr){
    return arr.map(number => number * 4);
}