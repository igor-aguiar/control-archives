let altura = 178;

console.log(calcularAlturaAoQuadrado(altura));


function calcularAlturaAoQuadrado(alt){
    alt/=100;
    return Math.pow(alt, 2);
}
