var arr = ["maçã", "banana", "laranja", "uva", "manga", "morango", "pêra", "melancia", "abacaxi", "kiwi"]

console.log(retornaStringIniciaComB(arr));

function retornaStringIniciaComB(conjunto){
    return conjunto.filter(elemento => elemento.charAt(0) == "b" ||elemento.charAt(0) == "B");
}
