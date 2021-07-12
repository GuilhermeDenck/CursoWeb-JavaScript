/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function intervalo(numero) {
    intervalo = 0
    foraIntervalo = 0
    
    for(let i = 0; i < numero.length; i++) {
        if(numero[i] >= 10 && numero[i] <= 20) {
            intervalo++
        } else {
            foraIntervalo++
        }
    }
    console.log(`${intervalo} vezes dentro do intervalo (10-20), ${foraIntervalo} vezes fora do intervalo(10-20)`)
}

intervalo([9, 10, 12, 13, 15, 17, 18, 20, 21])