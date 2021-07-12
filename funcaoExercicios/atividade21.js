/* 1) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados comidade acima de 30 e até 60 anos pagam R$ 95;
4) conveniados acima de 60 anos pagam R$130; */

function planoDeSaude(idade) {
    if(idade < 10) {
        return `R$ 180,00`
    } else if(idade < 30) {
        return `R$ 150,00`
    } else if(idade < 60) {
        return `R$ 195,00`
    }else {
        return `R$ 230,00`
    }
}

console.log(planoDeSaude(9))
console.log(planoDeSaude(29))
console.log(planoDeSaude(59))
console.log(planoDeSaude(81))

