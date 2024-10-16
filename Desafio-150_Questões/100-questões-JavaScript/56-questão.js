let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(multiplosdeQuatro(numeros));

function multiplosdeQuatro(arr){
    return arr.filter(num => num % 4 == 0);
}