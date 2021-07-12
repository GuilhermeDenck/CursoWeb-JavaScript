/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

let val1;
let val2;

function conta(val1, val2) {
    
    let divisao = val1 / val2
    let resto = val1 % val2

    console.log(divisao, resto)
}

conta(3, 4)