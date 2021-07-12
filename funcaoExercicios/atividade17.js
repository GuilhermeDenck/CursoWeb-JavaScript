/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
   |------------------|
   | Plano |  Aumento |
   | A     |  10%     |
   | B     | 15%      |
   | C     |  20%     |
   |------------------|   
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido */ 

function funcionario(plano, salario) {
   switch (plano) {
      case "A":
         return salario + (salario * (10/100)) 
      case "B":
         return salario + (salario * (15/100))
      case "C":
         return salario + (salario * (20/100))
      default:
         return `Plano inválido`
   }
}

console.log(funcionario("A", 2000))
console.log(funcionario("B", 2000))
console.log(funcionario("C", 2000))
console.log(funcionario("d", 5000))
