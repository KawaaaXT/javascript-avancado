
/*
const numeros = [10, 20, 30 , 8, 9 , 15]

const dobrados = numeros.map(numero => numero * 2)

console.log(dobrados)


const pessoas = [
    {nome: "Kauã", idade: 21},

    {nome: "Jessica", idade: 22},

    {nome: "Deyvid", idade: 23},

    {nome: "Eduardo", idade: 26}
];

const resultado = pessoas.map(pessoa => pessoa.nome)

console.log(resultado)




const pessoas = [
    {nome: "Kauã", idade: 21},

    {nome: "Jessica", idade: 22},

    {nome: "Deyvid", idade: 23},

    {nome: "Eduardo", idade: 26}
];

const resultado = pessoas.map(pessoa =>   ({idade: pessoa.idade}))

console.log(resultado)

*/


const pessoas = [
    {nome: "Kauã", idade: 21},

    {nome: "Jessica", idade: 22},

    {nome: "Deyvid", idade: 23},

    {nome: "Eduardo", idade: 26}
];

const resultado =  pessoas.map( (pessoa, indice) => {
    const newObject = {...pessoa}
    newObject.id = indice
    return newObject

})

console.log(pessoas)
console.log(resultado)