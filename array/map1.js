const nums = [1, 2, 3, 4, 5]

//For com propósito
let resultado = nums.map(function(e) { // ele gera um novo array usando a modificação passada na função
    return e * 2 //ele obrigatóriamente tem q ter um return
})

console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)