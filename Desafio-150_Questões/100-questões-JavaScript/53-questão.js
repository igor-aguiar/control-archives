var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(removeVogais(arr));

function removeVogais(conjunto){
    return conjunto.map(elemento => elemento.replace(/[aeiouáéíóúãõâêîôûàèìòù]/g, ""))
}
