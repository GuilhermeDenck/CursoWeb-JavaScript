const pilotos = ['Vettle', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro! > remove o ultimo elemento do Array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um novo elemento no FINAL Array
console.log(pilotos)

pilotos.shift() // REMOVE do primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um novo elemento no INICIO do Array
console.log(pilotos)

//splice pode adicionar ou remover elementos do Array

pilotos.splice(2, 0, 'Bottas', 'Massa') //Adicionar
console.log(pilotos)

pilotos.splice(3, 1) //Remover
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Gera um novo Array(pega uma parte/pedaço do Array), nesta caso a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Gera um novo Array mas ele pega somento do [1] indice ate o [3] o [4] indice n é pego
console.log(algunsPilotos2)