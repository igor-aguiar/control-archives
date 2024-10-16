var arr = [1,2,3,4,5,6];

console.log(multiplicaPorDois(arr));

function multiplicaPorDois(conjunto){
    let multiplicadosPorDois = conjunto.map(value => value * 2);
    return multiplicadosPorDois;
}
