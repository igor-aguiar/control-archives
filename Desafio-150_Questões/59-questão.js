let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(elevaAoCubo(numeros));

function elevaAoCubo(arr){
    return arr.map(num => Math.pow(num, 3));
}
