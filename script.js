function calculadora(a, b, operacao) {
    if (operacao === 'soma') {
        return a + b;
    }
    if (operacao === 'subtração'){
        return a - b;
    }
    if (operacao === 'multiplicação'){
        return a * b;
    }
    if (operacao === 'divisão'){
        return a / b;
    }
}

console.log(calculadora(10,20,'soma'));
console.log(calculadora(10,20,'subtração'));
console.log(calculadora(10,20,'multiplicação'));
console.log(calculadora(10,20,'divisão'));