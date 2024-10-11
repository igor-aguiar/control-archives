var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]

console.log(organizaString(arr));

function organizaString(conjunto){
    return conjunto.map(texto => texto.charAt(0).toUpperCase() + texto.slice(1));
}