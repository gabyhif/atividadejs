function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(`O número ${num1} é maior que ${num2}.`);
    } else if (num2 > num1) {
        console.log(`O número ${num2} é maior que ${num1}.`);
    } else {
        console.log(`Os números são iguais: ${num1} e ${num2}.`);
    }
}

compararNumeros(10, 20);
compararNumeros(25, 15);
compararNumeros(5, 5);
