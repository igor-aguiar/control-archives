var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(fisrtAndLastIndexUpperCase(arr));

function fisrtAndLastIndexUpperCase(conjunto){
    return conjunto.map(txt => txt.charAt(0).toUpperCase() + txt.substr(1, (txt.length -2)) + txt.charAt(txt.length - 1).toUpperCase())
}
