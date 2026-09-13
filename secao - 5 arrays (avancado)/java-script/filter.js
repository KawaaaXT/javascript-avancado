
/*
const numeros = [1, 2, 3, 4, 5, 6, 7 , 8, 50, 60, 100, 200]

const resultado = numeros.filter(numero => numero < 50 )
 
console.log(resultado)



const numeros = [1, 2, 3, 4, 5, 6, 7 , 8, 50, 60, 100, 200]

const resultado = numeros.filter((valor, indice, array) => {
    console.log(valor)
    console.log(indice)
   




    return valor > 10})

console.log(resultado)
*/


const pessoas = [
    {nome: "Kaua", idade: 50},

    {nome: "Deyvid", idade: 14},

    {nome: "Ramon", idade: 60},

    {nome: "Beatriz", idade: 23},

    {nome: "Joana", idade: 20}

  
];
const pessoasQueTerminaoNomeComa = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))
console.log(pessoasQueTerminaoNomeComa)





/*
const idadeAvancada = pessoas.filter(idavancada => idavancada.idade >= 50)
console.log(idadeAvancada)



const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5 )
/*  


console.log(pessoasComNomeGrande)







/*
const resultado = pessoas.filter(humanos => humanos.idade >= 18)
console.log(resultado)
*/