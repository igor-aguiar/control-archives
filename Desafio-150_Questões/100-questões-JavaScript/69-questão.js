var arr = ["MAÇÃ", "BANANA", "LIMÃO"]


console.log(setPrimeiraEUltimaLetraMinuscula(arr));

function setPrimeiraEUltimaLetraMinuscula(cconjunto){
    return cconjunto.map( srcc => srcc.charAt(0).toLowerCase() + srcc.slice(1, (srcc.length - 1)) + srcc.charAt(srcc.length - 1).toLowerCase());
}