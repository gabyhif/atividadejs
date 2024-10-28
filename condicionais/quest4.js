const alunos = [
    ["Aluno1", [10, 14, 20]],
    ["Aluno2", [55, 58, 90]],
    ["Aluno3", [65, 60, 47]],
    ["Aluno4", [30, 40, 60]],
    ["Aluno5", [95, 95, 75]]
];

alunos.forEach(([nome, notas]) => {
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    const status = media >= 70 ? "Aprovado" : "Reprovado";
    console.log(`${nome}, média ${media.toFixed(2)}, ${status}`);
});
