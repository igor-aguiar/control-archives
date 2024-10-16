var arr = ["maçã", "banana", "laranja", "uva", "manga", "MORANGO", "pêra", "MELANCIA", "abacaxi", "kiwi"]


console.log(setPrimeiraLetraMinusculaUltimaMaiuscula(arr));

function setPrimeiraLetraMinusculaUltimaMaiuscula(conjunto){
    return conjunto.map(str => str.charAt(0).toLowerCase() + str.substr(1, str.length - 2) + str.charAt(str.length - 1).toUpperCase())
}
