
/*
const numeros = [10, 20, 30, 40, 50, 60 , 90];

const retorno = numeros.reduce((acumulador, valor, indice, array) =>  {

    acumulador += valor 
    console.log(acumulador, valor)
    return acumulador

},0)



const numeros = [10, 20, 30, 40, 50, 60 , 90];

const retorno = numeros.reduce((acumulador, valor) =>  {

    if (valor % 2 === 0) acumulador.push(valor)

        return acumulador


    
},[])

console.log(retorno)

const numeros = [10, 20, 30, 40, 50, 60 , 90];

const retorno = numeros.reduce((acumulador, valor) =>  {
    if (valor % 2 === 0)  {
        acumulador += valor
    }
    
    return acumulador


    
}, 0)

console.log(retorno)



const pessoas = [
    {nome: "Kauã", idade: 21},

    {nome: "Roberta", idade: 22},

    {nome: "Deyvid", idade: 23},

    {nome: "Rodrigo", idade: 30}


]

const omaisVelho =  pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) {
        return acumulador
    }

    return valor

})

console.log(omaisVelho)


const produtos = [
    { nome: 'Teclado', preco: 80 },
    { nome: 'Mouse', preco: 35 },
    { nome: 'Monitor', preco: 200 },
    { nome: 'Headset', preco: 60 }
];

const total = produtos.reduce((acumulador, valor) =>  {
    return acumulador + valor.preco
}, 0)




const produtos = [
    { nome: 'Teclado', preco: 80 },
    { nome: 'Mouse', preco: 35 },
    { nome: 'Monitor', preco: 200 },
    { nome: 'Headset', preco: 60 }
];

const omaisCaro = produtos.reduce((acumulador, valor) => {
    if (acumulador.preco > valor.preco) {
        return acumulador
    }

    return valor
})

console.log(omaisCaro)


*/

const produtos =  [
    {produto: "Teclado", quantidade: 5},

    {produto: "Mouse", quantidade: 10},
    
    {produto: "Monitor", quantidade: 3},

    {produto: "HeadSet", quantidade: 4} 
];

const totalProdutos = produtos.reduce((acumulador, valor) => {
    return acumulador + valor.quantidade

}, 0)

console.log(totalProdutos)