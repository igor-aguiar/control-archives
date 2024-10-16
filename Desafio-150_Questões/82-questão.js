var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(stringDeTamanhoOito(arr));

function stringDeTamanhoOito(conjunto){
    return conjunto.filter(str => str.length == 8)
}
