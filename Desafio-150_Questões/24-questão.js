var arr = ["um", "dois", "tres", "quatro"];

console.log(concatenarString(arr));

function concatenarString(conjunto){
    let greatString = conjunto.join(", ")
    return greatString;
}