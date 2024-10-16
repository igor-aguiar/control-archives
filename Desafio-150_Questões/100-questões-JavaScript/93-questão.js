var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(triplicaVogais(arr));

function triplicaVogais(conjunto){
    return conjunto.map(str => str.replace(/[aeiouáéíóúâêîôûãõ]/g, vogal => vogal+vogal+vogal))
}