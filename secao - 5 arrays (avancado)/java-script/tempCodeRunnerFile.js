
const numeros = [10, 20, 30, 1, 50, 40];

const retorno = numeros.reduce((acumulador, valor, indice, array) =>  {

    acumulador += valor 
    console.log(acumulador, valor)

},0)