var arr = ["MAÇÃ", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]

console.log(deixaMinusculoInvertida(arr));

function deixaMinusculoInvertida(conjunto){
    return conjunto.map(value => value.split('').reverse().join('').toLowerCase())
}