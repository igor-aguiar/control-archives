var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(tamMaiorQueSete(arr));

function tamMaiorQueSete(cconjunto){
    return cconjunto.filter(str => str.length > 7);
}
