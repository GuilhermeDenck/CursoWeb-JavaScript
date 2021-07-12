/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */


function simples(capital, juros, aplicacao) {
    jurosReal = juros/100
    return capital * (capital * jurosReal * aplicacao)
}

function composto(capital, juros, aplicacao) {
    jurosReal = juros/100
    return capital * (1 + jurosReal) ** aplicacao
}

console.log(`R$ ${simples(100, 10, 2).toFixed(2).replace(".", ",")}`)
console.log(`R$ ${composto(100, 10, 2).toFixed(2).replace(".", ",")}`)