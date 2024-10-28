function maiorEMenor(numeros) {
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    return { maior, menor };
}

const lista = [10, 23, 5, 67, 34, 2, 78, 90, 1, 45];
const resultado = maiorEMenor(lista);
console.log(resultado); 
