function contarVogaisEConsoantes(frase) {
    const vogais = 'aeiouAEIOU';
    let contagemVogais = 0;
    let contagemConsoantes = 0;

    for (let char of frase) {
        if (char.match(/[a-zA-Z]/)) {
            if (vogais.includes(char)) {
                contagemVogais++;
            } else {
                contagemConsoantes++;
            }
        }
    }

    return {
        vogais: contagemVogais,
        consoantes: contagemConsoantes
    };
}

const resultado = contarVogaisEConsoantes("Exemplo de frase!");
console.log(resultado); 
