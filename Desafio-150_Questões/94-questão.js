var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi", "mayonese"]


console.log(retornaStringComLetraY(arr));

function retornaStringComLetraY(conjunto){
    return conjunto.filter(str => str.includes('y'))
}
