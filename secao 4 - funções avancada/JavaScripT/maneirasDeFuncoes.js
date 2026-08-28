
// Funcão Hoisting
retribuirOi()
function retribuirOi () {
    console.log("Olá, Tudo Bém ?")
}



// Function Express
const falarOi = function () {
    console.log("Olá")
}

falarOi()

function executarFuncao (funcao){
    funcao ()
}

executarFuncao(retribuirOi)