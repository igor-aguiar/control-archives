var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(removeConsoantes(arr));

function removeConsoantes(conjunto){
    return conjunto.map(str => str.replace(/[bçcdfghjklmnpqrstvxwyz]/g, ''));
}
