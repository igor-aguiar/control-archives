let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(multiplosDeSeis(numeros));

function multiplosDeSeis(arr){
    return arr.filter( num => num % 6 == 0);
}

