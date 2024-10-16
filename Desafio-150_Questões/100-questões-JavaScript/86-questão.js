var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi", "django"]

console.log(iniciamEmD(arr));

function iniciamEmD(conjunto){
    return conjunto.filter(str => str.charAt(0) == "D" || str.charAt(0) == "d")
}
