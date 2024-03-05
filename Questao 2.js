
function Fibonacci(num) {
    if (num < 0) {
        return false; 
    }

    let a = 0, b = 1;

    while (b < num) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b === num; 
}

const numero = 21;

const pertenceAFibonacci = Fibonacci(numero);

if (pertenceAFibonacci) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
