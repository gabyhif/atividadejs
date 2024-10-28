function verificarPalavraNaFrase(frase, palavra) {
    if (frase.includes(palavra)) {
        console.log("Sim, esta palavra está presente.");
    } else {
        console.log("Erro: a palavra não está presente.");
    }
}


const frase = "I'm pig";
const palavra = "oink";

verificarPalavraNaFrase(frase, palavra); 
