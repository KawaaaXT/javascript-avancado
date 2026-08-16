

const funcionarios = [
    {nome: "Carlos", salario: 1200},
    {nome: "Larissa", salario: 2300},
    {nome: "Deyvid", salario: 1800},
    {nome: "Kauã", salario: 3200}
]
let nomeMaiorSalario = ""
let maiorSalario = 0
let quantidade = 0
let totalSalarios = 0
for (let i = 0; i < funcionarios.length ; i++){
    const {nome, salario} = funcionarios[i]
      totalSalarios += salario

    if (salario >= 2000){
        quantidade++
    } if(salario > maiorSalario){
        maiorSalario = salario
        nomeMaiorSalario = nome
    }
}

console.log(`Funcionarios que recebem Mais de 2000: ${quantidade}`)
console.log(`Total Gasto Com Salairos : ${totalSalarios}`)
console.log(`O Maior Salario é de : ${nomeMaiorSalario} que é : ${maiorSalario}`)









/*
const carrinho = [
    {produto: "Teclado", preco: 100, quantidade: 2},
    {produto: "Mouse", preco: 100, quantidade: 1},
    {produto: "Monitor", preco: 800, quantidade: 1},
    {produto: "HeadSet", preco: 120, quantidade: 2}
]

 let total = 0

for (let i = 0; i < carrinho.length ; i++){
    let {produto, preco, quantidade} = carrinho[i]
    let valorProduto = preco * quantidade
    total += valorProduto
    
    
}

console.log(total)
*/










/*

const alunos = [
    {nome: "Kauã", nota: 8},
    {nome: "Pedro", nota: 6},
    {nome: "Ramon", nota: 9},
    {nome: "Daniela", nota: 5},
    {nome: "Vinicius", nota: 4},
    {nome: "Gustavo", nota: 5},

]

for (let i = 0 ; i < alunos.length ; i++){
    const {nome, nota} = alunos[i]
    if (nota >= 7){
        console.log(` Aluno ${nome} : Parabéns voce esta Aprovado ` )
    }else if (nota >= 5) {
        console.log(` Aluno ${nome} : Quase.. você esta em recuperação`)
    }else {
        console.log(` Aluno ${nome} : Você esta reprovado tente proximo ano`)
    }
}

*/







/*
const produtos = [
    {nome: "Teclado", estoque: 12 },
    {nome: "Mouse", estoque: 0 },
    {nome: "Monitor", estoque: 5 },
    {nome: "HeadSet", estoque: 0 },
    {nome: "WebCam", estoque: 8 }
];

for (let i = 0; i < produtos.length; i++){
    const {nome, estoque} = produtos[i]
    if (estoque === 0){
        console.log(` ${nome} : Sem Estoque`)
    }else{
        console.log(` ${nome} : Disponivel`)
    }
}
    */