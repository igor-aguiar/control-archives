var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(isStringLengthSix(arr));

function isStringLengthSix(conjunto){
    return conjunto.filter(str => str.length == 6);
}
