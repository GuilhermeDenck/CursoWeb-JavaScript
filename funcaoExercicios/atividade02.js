/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

let a;
let b;
let c;

function triangulos (a, b, c) {

    if (a == b && a == c) {
        return `Equilatero`
    }

    if (a == b || b == c || a == c) {
        return `Isósceles`
    } else {
        return `Escaleno`
    }
}

console.log(triangulos(2, 2, 2))
console.log(triangulos(2, 2, 5))
console.log(triangulos(1, 2, 3))
