/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.  */

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ["1", "2", "3", "4"]
let vetorDouble = [10.0, 20.0, 30.0, 40.0]

function vetores(...argumentos) {
    let vetorFinal = []
    for(let i = 0; i < argumentos.length; i++) {
        vetorFinal = vetorFinal.concat(argumentos[i])
    }
    return vetorFinal
}

console.log(vetores(vetorInteiro, vetorDouble))
console.log(vetores(vetorDouble, vetorString))