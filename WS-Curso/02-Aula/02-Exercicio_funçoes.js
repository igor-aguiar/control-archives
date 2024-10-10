const tecnologia = "React";
var objt = objtDoCurso(tecnologia)
console.log(objt);

function objtDoCurso(tec){
    return `Meu objetivo no curso é aprender ${tec}`;
}

var arrow = (tecno) => {
    return `Meu objetivo no curso é aprender ${tecno}`;
};

console.log(arrow(tecnologia));