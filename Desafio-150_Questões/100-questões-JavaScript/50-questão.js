var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]

console.log(retornaStringDeTamanhoQuatro(arr));

function retornaStringDeTamanhoQuatro(conjunto){
    return conjunto.filter(nome => nome.length == 4);
}