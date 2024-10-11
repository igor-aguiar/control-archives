var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(setUltimaLetraMaiuscula(arr));

function setUltimaLetraMaiuscula(cconjunto){
    return cconjunto.map( srcc => srcc.slice(0, (srcc.length - 1)) + srcc.charAt(srcc.length - 1).toUpperCase());
}