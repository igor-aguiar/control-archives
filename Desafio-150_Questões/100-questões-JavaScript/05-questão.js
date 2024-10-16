/** 4 - Faça um script que contenha uma função objetivoDoCurso(tecnologia). A função deve retornar a string: “Meu objetivo é aprender [parametro tecnologia]”. Fora da função, defina uma const tecnologia que possua o valor “React”. Chame a execução da função para que a mesma retorne: “Meu objetivo é aprender React”. Faça um exemplo com function e outro com arrow function. */
const objetivo = "Desenvolvedor Full-stack"

function objetivoDoCurso(obj){
    return (`Meu objetivo de carreira é me tornar um ${obj}`);
}

console.log(objetivoDoCurso(objetivo));

var objetivoCurso = (objt) => {
    return (`Meu objetivo de carreira é me tornar um ${objt}`);
}

console.log(objetivoCurso(objetivo))