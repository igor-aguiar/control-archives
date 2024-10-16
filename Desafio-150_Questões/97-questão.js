var arr = ["maçã", "banana", "laranja", "uva", "manga", "MORANGO", "pêra", "MELANCIA", "abacaxi", "kiwi"]


console.log(stringMaiusculaInvertida(arr));

function stringMaiusculaInvertida(conjunto){
    return conjunto.map(str => str.split('').reverse().join('').toUpperCase())
}
