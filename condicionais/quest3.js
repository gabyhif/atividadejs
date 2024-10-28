let somaPar = 0;
let somaImpar = 0;
for (let i = 0; i <= 99; i++) {
    i % 2 === 0 ? somaPar += i : somaImpar += i;
}
console.log(`Soma dos pares: ${somaPar}, Soma dos ímpares: ${somaImpar}`);
