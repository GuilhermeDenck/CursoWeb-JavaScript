/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.  */

function vetorNegativo(vetor) {
    let negativo = 0

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            negativo++
        } 
        
    }
    return negativo
}

console.log(vetorNegativo([-1, -2, 1, 2, -3]))