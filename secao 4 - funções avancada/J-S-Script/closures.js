
function retornaFuncao (nome) {
    return function (){
        console.log(`Olá Sra ${nome}`)

    }
}

const funcao = retornaFuncao("Jamile")

console.log(funcao())