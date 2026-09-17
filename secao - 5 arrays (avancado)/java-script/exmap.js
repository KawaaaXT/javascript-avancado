

const numeros = [10, 20, 9, 8, 40, 50, 100]

const triplicados = numeros.map(numero => numero * 3)

console.log(triplicados)


const nomes = ["kauã", "deyvid", "joão", "roberta"];

const nomesMaiusculo = nomes.map(nome => nome.toUpperCase())

console.log(nomesMaiusculo)


const produtos = [
    { nome: 'Teclado', preco: 50 },
    { nome: 'Mouse', preco: 25 },
    { nome: 'Monitor', preco: 200 }
];

const novoArray = produtos.map(produto => {
    const newObject = {...produto}
    newObject.preco =  newObject.preco * 0.90
    return newObject
})

console.log(novoArray)




const salarios = [
    {nome: "Kauã", salario: 1200},

    {nome: "Deyvid", salario: 1400},

    {nome: "Larissa", salario: 2000},

    {nome: "Rebeca", salario: 1100}
];

const novosSalarios = salarios.map(salario => {
    const newObject = {...salario};

    const resul = newObject.salario * 1.10

    const mensagem = newObject.salario < 2000 ? resul : newObject.salario

    newObject.salario = mensagem

    return newObject
    
})

console.log(novosSalarios)
