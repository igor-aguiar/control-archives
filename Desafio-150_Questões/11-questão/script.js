var textoMuda = document.getElementById('texto');

function mudaTexto(){
    var textoAntigo = textoMuda.innerText;

    textoMuda.innerHTML = `O testo era "${textoAntigo}" agora é esta frase.`
}