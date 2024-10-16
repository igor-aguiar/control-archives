var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(deixaMaiusculaInvertida(arr));

function deixaMaiusculaInvertida(cconjunto){
    return cconjunto.map( str => str.split('').reverse().join('').toUpperCase());
}