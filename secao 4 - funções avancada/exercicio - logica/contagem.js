/*
const contagemRegressiva = numero => {
    console.log(numero)
    
          
    if(numero > 0) {
        numero--
        contagemRegressiva(numero)
    }

    
}

contagemRegressiva(5)
*/


const somarAte = numero => {
    if (numero === 1) {
        return 1
    }

    return numero + somarAte(numero +- 1)
}

console.log(somarAte(5))