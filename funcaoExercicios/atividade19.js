/* 19) O cardápio de uma lanchonete é o seguinte:

    Código  Descrição do produto    Preço

    100     Cachorro Quente         R$ 3,00
    200     Hambúrguer Simples      R$ 4,00
    300     Cheeseburguer           R$ 5,50
    400     Bauru                   R$ 7,50
    500     Refrigerante            R$ 3,50
    600     Suco                    R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */ 

function lanchonete(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return (quantidade * 3).toFixed(2)
        case 200:
            return (quantidade * 4).toFixed(2)
        case 300:
            return (quantidade * 5.50).toFixed(2)
        case 400:
            return (quantidade * 7.50).toFixed(2)
        case 500:
            return (quantidade * 3.50).toFixed(2)
        case 600:
            return (quantidade * 2.80).toFixed(2)
        default:
            return `Este produto não está incluido no cardápio`
    }
}

console.log(`R$${lanchonete(100, 2).replace(".", ",")}`)
console.log(`R$${lanchonete(200, 2).replace(".", ",")}`)
console.log(`R$${lanchonete(300, 2).replace(".", ",")}`)
console.log(`R$${lanchonete(400, 2).replace(".", ",")}`)
console.log(`R$${lanchonete(500, 2).replace(".", ",")}`)
console.log(`R$${lanchonete(600, 2).replace(".", ",")}`)