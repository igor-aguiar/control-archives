var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]

console.log(stringsMaioresQueCinco(arr));

function stringsMaioresQueCinco(conjunto){
    return conjunto.filter(valor => valor.length > 5);
}