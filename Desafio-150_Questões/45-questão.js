var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]

console.log(deixaMaiusculaInvertida(arr));

function deixaMaiusculaInvertida(conjunto){
    return conjunto.map(valor => valor.split('').reverse().join('').toUpperCase())
}