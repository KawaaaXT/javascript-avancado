










function verificadorIdade (nome) {
    if (nome === ""){
        throw new Error("Não pode nome vazio.") // eu quero lança um erro aqui
    }

    return ` Olá ${nome} seja bem vindo`
}

// TENTE EXECUTAR ISSO
try{
    console.log(verificadorIdade(""))
}catch (erro){ // se de error faça isso
    console.log(erro.name)
}

console.log(verificadorIdade("Kawaaa"))