let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];


console.log(decrementaEmQuatro(numeros));

function decrementaEmQuatro(arr){
    return arr.map(num => num - 4 );
}
