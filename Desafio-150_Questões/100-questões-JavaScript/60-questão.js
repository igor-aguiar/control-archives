let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(divisiveisPor7(numeros));

function divisiveisPor7(arr){
    return arr.filter( num => num % 7 == 0)
}
