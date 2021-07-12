/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores */

let val1;
let val2;

function contas (val1, val2) {

    let soma = val1 + val2
    let sub = val1 - val2
    let mult = val1 * val2
    let divi = val1 / val2

    return console.log(soma, sub, mult, divi)
}

contas(20, 10)