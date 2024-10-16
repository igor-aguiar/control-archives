var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi", "coco"]


console.log(mostraStringsComC(arr));

function mostraStringsComC(conjunto){
    return conjunto.filter(str => str.charAt(0) == 'c')
}
