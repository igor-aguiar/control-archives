let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];

console.log(imparesMaioresQueQuinze(numeros));

function imparesMaioresQueQuinze(arr){
    return arr.filter(num => num % 2 != 0 && num > 15);
}
