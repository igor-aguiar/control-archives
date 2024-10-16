const numeros = Array.from({ length: 100 }, (_, i) => i + 1);

numeros.map(numero => {
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(numero % 3 == 0 ? "Fizz" : numero % 5 == 0 ? "Buzz" : numero);
    }
});
