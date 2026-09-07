
// Funções Recursivas



const recursiva = numero => {
     console.log(numero)

     if(numero > 1) {
        recursiva(numero - 1)
     }
}

recursiva(5)



const contarAteDez = max => {
    if(max >= 10) return;

    max++

    console.log(max)

    contarAteDez(max)
}

contarAteDez(0)