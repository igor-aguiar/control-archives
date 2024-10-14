var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi", 'bolo']


console.log(contemLetraO(arr));

function contemLetraO(conjunto){
    return conjunto.filter(nam => /[oóôõòOÓÔÕÒ]/g.test(nam));
}