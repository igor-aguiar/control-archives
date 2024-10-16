var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]


console.log(duplicaConsoantes(arr));

function duplicaConsoantes(conjunto){
    return conjunto.map(str => str.replace(/[bcçdfghijklmnpqrstvwxyz]/g, cons => cons + cons))
}
