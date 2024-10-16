var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]



console.log(stringsComU(arr));

function stringsComU(conjunto){
    return conjunto.filter(str => str.includes("u"))
}
