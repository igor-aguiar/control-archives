var numero = 1;
while (numero <= 100){
    if (numero % 3 == 0 && numero % 5 == 0){
        console.log("FizzBuzz")
    } else {
        console.log(numero % 3 == 0 ? "Fizz" : numero % 5 == 0 ? "Buzz" : numero);
    }
    numero++
}