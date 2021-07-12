/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.  */

function media(vetor) {
    let divisao = vetor.length
    let soma = 0
    for(let i = 0; i < vetor.length; i++) {
        soma = vetor[i] + vetor[++i]
    }
    return soma / divisao
}

console.log(media([4, 2])) /* 4 + 2 = 6 / 2 = 3 */
console.log(media([6, 2])) /* 6 + 2 = 8 / 2 = 4 */