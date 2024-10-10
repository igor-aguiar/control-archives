var arr = ["Primeiro", "Segundo", "Terceiro"]

const newArr = revertString(arr);
console.log(newArr)

function revertString(conjunto){
    return conjunto.map(value => value.split('').reverse().join(''))
}