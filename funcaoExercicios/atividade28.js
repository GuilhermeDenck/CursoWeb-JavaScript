/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function parImpar(numero) {
    let par = 0
    let impar = 0

    for(let i = 0; i < numero.length; i++) {
        if(numero[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`${par} Par, ${impar} Impar`)
}

parImpar([1, 2, 3, 4, 5])
