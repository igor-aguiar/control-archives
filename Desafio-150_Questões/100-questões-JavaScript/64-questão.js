let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30];


console.log(maioresQue20(numeros));

function maioresQue20(arr){
    return arr.filter(num => num > 20);
}
