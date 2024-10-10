var arr = ["um", "dois", "tres", "quatro"];

console.log(colocarCaixaAlta(arr));

function colocarCaixaAlta(conjunto){
    let greatString = conjunto.map(valor => {
       return valor.toUpperCase();
    })
    return greatString;
}