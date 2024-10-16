var arr = ["maçã", "banana", "laranja", "uva", "manga", "MORANGO", "pêra", "MELANCIA", "abacaxi", "kiwi"]


console.log(setPrimeiraLetraMaiusculaUltimaMinuscula(arr));

function setPrimeiraLetraMaiusculaUltimaMinuscula(conjunto){
    return conjunto.map(str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase())
}
