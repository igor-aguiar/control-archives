var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(duplicadorVogais(arr));

function duplicadorVogais(conjunto){
    return conjunto.map(str => str.replace(/[aáãâeéêiíîoóõôuúû]/g, (vogal) => vogal + vogal))
}
