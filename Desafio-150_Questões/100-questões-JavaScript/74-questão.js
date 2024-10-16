var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(stringComLetraI(arr));

function stringComLetraI(conjunto){
    return conjunto.filter(str => str.includes("i"));
}