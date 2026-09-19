/*
const numeros = [10, 25, 30, 45, 50]

numeros.forEach((numero, indice) => {

    console.log(`Numero: ${numero} - Indice: ${indice}`)

})
console.log(numeros)




const produtos = [
    {nome: "Teclado", preco: 80},

    {nome: "Mouse", preco: 35},

    {nome: "Monitor", preco: 200},

    {nome: "HeadSet", preco: 60},

]
let total = 0


produtos.forEach((valor) => {
    total += valor.preco
    
})
 

console.log(total)

*/





const funcionarios = [
    { nome: 'Carlos', salario: 1200 },
    { nome: 'Ana', salario: 1800 },
    { nome: 'Pedro', salario: 950 },
    { nome: 'Mariana', salario: 2100 },
    { nome: 'João', salario: 1100 }
];

let total = 0

funcionarios.forEach((funcionario, indice) => {
    if(funcionario.salario >= 1500){
        console.log(`${funcionario.nome} : ${indice + 1} Salário Alto`)
    }else{
        console.log(` ${funcionario.nome} : ${indice + 1}, Salário abaixo de 1500`)
    }


    if(funcionario.salario >= 1500){
        total++
        console.log(`O total de funcionario que recebem 1500 ou mais é : ${total} ` )
    }

})

console.log(funcionarios)