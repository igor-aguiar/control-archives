function calculaMedia() {
    let nota1 = document.getElementById("nota-1").value;
    let nota2 = document.getElementById("nota-2").value;
    let nota3 = document.getElementById("nota-3").value;
    let nota4 = document.getElementById("nota-4").value;

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;
    document.getElementById('media').innerText = media;
    document.getElementById('resultado').innerText = media >= 7 ? "Aprovado" : "Reprovado"
}

function isNumeroPrimo() {
    let number = document.getElementById('number').value;
    let result = true;
    if (number <= 1) {
        result = false;
    }

    else if (number == 2) {
        result = true;
    }

    else if (number % 2 == 0) {
        result = false
    }


    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i == 0) {
            result = false;
            break;
        }
    }

    document.getElementById('resultado').innerText = result ? `Numero ${number} é Primo` : `Numero ${number} Não é Primo`
}

function verificaNumeroAdivinhado() {
    let num = parseInt(sessionStorage.getItem('sortNum'));
    let valorInserido = parseInt(document.getElementById('numero').value);
    document.getElementById('resultado').innerText = num == valorInserido ? "Parabéns você acertou" : valorInserido < num ? "O número inserido é menor" : "O numero inserido é maior"
}

function geraNumeroAleatorio() {
    sessionStorage.setItem('sortNum', Math.floor(Math.random() * 100))
    document.getElementById('numberStatus').innerText = "Numero Gerado"
}

function somarNumeros() {
    let topNum = parseInt(document.getElementById('number').value);
    let result = 0;
    for (let i = 0; i <= topNum; i++) {
        result += i;
    }

    document.getElementById('resultado').innerText = result;
}

function gerarTabuada() {
    let val = parseInt(document.getElementById('number').value)

    for (let i = 1; i <= 10; i++) {
        let novalinha = document.createElement('tr');
        let base = document.createElement('td');
        base.innerText = i;

        let primeiraCx = document.createElement('td');
        primeiraCx.innerText = i - val;
        primeiraCx.setAttribute('id', `subtracao_${i}`)

        let segundaCx = document.createElement('td');
        segundaCx.innerText = i + val;
        segundaCx.setAttribute('id', `adicao_${i}`)

        let terceiraCx = document.createElement('td');
        terceiraCx.innerText = i * val;
        terceiraCx.setAttribute('id', `multiplicacao_${i}`)

        let quartaCx = document.createElement('td');
        quartaCx.innerText = (i / val).toFixed(2);
        quartaCx.setAttribute('id', `divisao_${i}`)

        novalinha.appendChild(base);
        novalinha.appendChild(primeiraCx);
        novalinha.appendChild(segundaCx);
        novalinha.appendChild(terceiraCx);
        novalinha.appendChild(quartaCx);


        document.getElementById('tabuada').appendChild(novalinha);
    }
}

function verificarNomeMaisLongo() {
    let nomes = document.getElementById('nomes').value
    let arrNomes = nomes.split(',')
    let maiorNome = '';
    arrNomes.map(str => str.length > maiorNome.length ? maiorNome = str : null);

    let novoParagrafo = document.createElement('h3');
    novoParagrafo.innerText = `O Maior nome é ${maiorNome}`
    document.body.appendChild(novoParagrafo);
}

function setCalculoFatorial() {
    let number = parseInt(document.getElementById('number').value);
    let resultado = document.createElement('h2');

    resultado.innerText = "Resultado é: " + fatorial(number);

    document.body.appendChild(resultado)
}

function fatorial(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * this.fatorial(num - 1)
    }
}

function sortearDados() {
    let num1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    let num2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    document.getElementById("dado_1").innerText = num1;
    document.getElementById("dado_2").innerText = num2;
    document.getElementById("soma").innerText = num2 + num1;

}

function calcularLetras() {
    let textoCompleto = document.getElementById('text').value;
    textoCompleto = textoCompleto.replace(/[^\p{L}\p{N}\s]/gu, '');
    textoCompleto = textoCompleto.replace(/\s+/g, '');
    let consoantes = textoCompleto.split('').filter(letra => /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g.test(letra));

    document.getElementById('consoantes').innerText = consoantes.length;
    document.getElementById('vogais').innerText = textoCompleto.length - consoantes.length;
}

function converToBinary() {
    let resultado = document.createElement('h3')
    console.log(parseInt(document.getElementById('number').value).toString(2))
    resultado.innerText = parseInt(document.getElementById('number').value).toString(2);

    document.body.appendChild(resultado)
}

function sequenciaDeFibonacci() {
    let a = 0, b = 1, temp;
    let lastNum = parseInt(document.getElementById('number').value);
    let values = [a, b]

    for (let i = 2; i < lastNum; i++) {
        temp = b + a;
        a = b
        b = temp
        values.push(b)
    }

    document.getElementById('fib').innerText = values.toString()
}

function verificaPalindromo() {
    let str = document.getElementById('name').value;

    document.getElementById('resultado').innerText = str == str.split('').reverse().join('') ? `${str} é um palindromo` : `${str} não é um palindromo`
}

function ordenarNumeros() {
    let input = document.getElementById('numeros').value;

    let numerosArray = input.split(',').map(Number);

    numerosArray.sort((a, b) => a - b);

    document.getElementById('resultadoOrdenado').innerText = 'Números ordenados: ' + numerosArray.join(', ');
}

function getMenorMaiorNumero() {
    let input = document.getElementById('numeros').value;
    let arrNumeros = input.split(',').map(Number)
    arrOrdenado = arrNumeros.sort((a, b) => a - b);
    console.log(arrOrdenado)
    let menor = arrOrdenado[0], maior = arrOrdenado[arrNumeros.length - 1];

    document.getElementById('resultado').innerText = `Maior numero: ${maior} - Menor numero: ${menor}`
}

function verificarNumeroPerfeito() {
    let num = parseInt(document.getElementById('number').value)
    let agregador = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            agregador += i;
        }
    }

    document.getElementById('resultado').innerText = agregador == num ? "É um numero perfeito" : "Não é um numero perfeito";
}

function verificaParesImpares() {
    if (document.getElementById('pares').childElementCount > 1 || document.getElementById('impares').childElementCount > 1) {
        location.reload();
        return
    }

    let num = parseInt(document.getElementById('number').value)
    var pares = document.getElementById('pares'), impares = document.getElementById('impares');
    var tabela = document.getElementById('resultado');

    for (let index = 1; index <= num; index++) {
        var novoRegistro = document.createElement('td');
        novoRegistro.innerHTML = index;
        index % 2 == 0 ? pares.appendChild(novoRegistro) : impares.appendChild(novoRegistro);
    }
}

function updateCalc(value) {

    if (calculo.innerText == ' ') {
        calculo.innerText = value;
    } else {
        calculo.innerHTML += value;
    }
}

function calcular() {
    let calculo = document.getElementById('calculo');
    let op = calculo.innerText.split('').filter(num => /[^0-9]/g.test(num))
    let valores = calculo.innerText.split(/[^0-9]/g).map(Number)
    let result = 0;    

    for (let index = 0; index < op.length; index++) {
        
        if (op[index] == 'e'){
            let cal = Math.pow(valores[index], valores[index+1])
            valores.splice(index, 2, cal);
            op.splice(index, 1);
            index--
        } else if ((op[index] == '√')){
            let cal = Math.sqrt(valores[index+1])
            valores.splice(index, 2, cal);
            op.splice(index, 1);
            index--
        }        
    }
    console.log(valores);
    
    for (let i = 0; i < op.length; i++) {
        if (op[i] == '/' || op[i] == '*'){
            let cal = calcularOperacao(valores[i], op[i], valores[i+1])
            valores.splice(i, 2, cal);
            op.splice(i, 1);
            i--
        }  
    }
    console.log(valores);

    for (let i = 0; i < op.length; i++) {
        let cal = calcularOperacao(valores[i], op[i], valores[i+1])
        valores.splice(i, 2, cal);
        op.splice(i, 1);
        i--     
    }
    console.log(valores);
    result = valores[0]
    
    calculo.innerText += ` = ${result}`
}

function calcularOperacao(a, operador, b) {
    switch (operador) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
    }
}

function registrarProduto(){
    let produto = document.getElementById('produto').value;
    let valor = document.getElementById('valor').value;

    let listaProdutos = document.getElementById('lista-produtos');

    let linha = document.createElement('tr');
    let prodCol = document.createElement('td');
    let valCol = document.createElement('td');

    prodCol.textContent = produto;
    valCol.textContent = valor;

    linha.appendChild(prodCol);
    linha.appendChild(valCol);
    listaProdutos.appendChild(linha);

    listaProdutos.childNodes
    document.getElementById('total').textContent = calcularTotalNota(listaProdutos);
}

function calcularTotalNota(lista){
    console.log(lista.rows[0].cells[1]);
}