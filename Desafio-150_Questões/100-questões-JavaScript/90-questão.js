var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi", "papelaria"]


console.log(stringTamanhoNove(arr));

function stringTamanhoNove(conjunto){
    return conjunto.filter( str => str.length == 9)
}
