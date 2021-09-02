const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) 
console.log(Object.prototype.__proto__ === null)

function MeuObjetco() {}
console.log(typeof Object, typeof MeuObjetco)
console.log(Object.prototype, MeuObjetco.prototype)
