var arr = [2,30,40,34,56,17,88];

var newArr = decrementaEmUm(arr);

console.log(newArr);

function decrementaEmUm(conjunto){
    return conjunto.map(value => value - 1);
}