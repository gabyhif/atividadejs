function inverterNumero(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(inverterNumero(12356));
