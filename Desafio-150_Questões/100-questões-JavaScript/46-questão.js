var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]

console.log(textoContemLetraE(arr))

function textoContemLetraE(conjunto){
    return conjunto.filter(texto => texto.includes("e") || texto.includes("é") || texto.includes("ê"));
}