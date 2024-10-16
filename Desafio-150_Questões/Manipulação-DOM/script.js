

function calculaMedia(){
    let nota1 = document.getElementById("nota-1").value;
    let nota2 = document.getElementById("nota-2").value;
    let nota3 = document.getElementById("nota-3").value;
    let nota4 = document.getElementById("nota-4").value;

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4;
    document.getElementById('media').innerText = media;    
    document.getElementById('resultado').innerText = media >= 7 ? "Aprovado" : "Reprovado" 
}