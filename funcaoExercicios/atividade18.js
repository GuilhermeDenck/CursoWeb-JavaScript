/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

function numero(numero) {
    switch (numero) {
        case 1:
            return "Um"
        case 2:
            return "Dois"
        case 3:
            return "Três"
        case 4:
            return "Quatro"
        case 5:
            return "Cinco"
        case 6:
            return "Seis"
        case 7:
            return "Sete"
        case 8:
            return "Oito"
        case 9:
            return "Nove"
        case 10:
            return "Dez"
        default:
            return `Número fora do intervalo.`
    }    
}

console.log(numero(1))
console.log(numero(2))
console.log(numero(3))
console.log(numero(4))
console.log(numero(5))
console.log(numero(6))
console.log(numero(7))
console.log(numero(8))
console.log(numero(9))
console.log(numero(10))
console.log(numero(11))