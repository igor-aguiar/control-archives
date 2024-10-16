let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];


console.log(retornaNumerosImparesMenoresQueVinte(numeros));

function retornaNumerosImparesMenoresQueVinte(arr){
    return arr.filter(number => number % 2 != 0 && number < 20);
}