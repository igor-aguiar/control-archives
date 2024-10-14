let numeros = [3, 87, 12, 55, 8, 15, 42, 5, 69, 30];


console.log(retornaNumerosMenoresQueCinquenta(numeros))

function retornaNumerosMenoresQueCinquenta(conjunto){
    return conjunto.filter(elemento => elemento < 50)
}