function maiorPalavra(frase) {
    const palavras = frase.split(' ');
    let maior = '';

    for (let palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    return maior;
}

const fraseExemplo = "Life goes on, like an arrow in the blue sky.";
console.log(maiorPalavra(fraseExemplo)); 
