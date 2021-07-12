/* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

let val1;
let val2;

function expoente(val1, val2) {
    //return val1 ** val2;
    return Math.pow(val1, val2)
}

console.log(expoente(2, 3))