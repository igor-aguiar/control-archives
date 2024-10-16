let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(elevaAQuinta(numeros));

function elevaAQuinta(arr){
    return arr.map( num => Math.pow(num, 5))
}
