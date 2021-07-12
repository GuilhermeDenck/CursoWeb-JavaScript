/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo */

function aluno(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b, c) => a < b && a < c ? 1 : -1)

    let resultado = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    if(resultado >= 5) {
        return `Código do Aluno: ${codAluno}\nNota final ${resultado.toFixed(2)} Aluno Aprovado`
    } else {
        return `Código do Aluno: ${codAluno}\nNota final ${resultado.toFixed(2)} Aluno Reprovado`
    }
}

console.log(aluno(123, 5, 5, 5))