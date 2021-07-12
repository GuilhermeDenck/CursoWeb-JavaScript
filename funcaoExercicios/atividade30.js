/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor */

function maiorMenor(numero) {
    let maior = 0
    let menor = 0
    for(let i = 0; i < numero.length; i++) {
        if(maior === undefined && menor === undefined) {
            maior = numero[i]
            menor = numero[i]
        } else {
            if(numero[i] > maior) {
                maior = numero[i]
            }
            if(numero[i] < menor) {
                menor = numero[i]
            }
        }
    }
    return [maior, menor]
}

console.log(maiorMenor([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]))