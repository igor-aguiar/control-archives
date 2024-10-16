var arr = [1,2,3,4,5,6];

console.log(filtrarNumerosPares(arr));

function filtrarNumerosPares(conjunto){
    let numerosPares = conjunto.filter(value => value % 2 == 0);
    return numerosPares;
}
