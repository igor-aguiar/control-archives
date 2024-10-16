var arr = [2,30,40,34,25,17,88];

var newArr = divisivelPorCinco(arr);

console.log(newArr);

function divisivelPorCinco(conjunto){
    return conjunto.filter(value => value % 5 ==  0);
}