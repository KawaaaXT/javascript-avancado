




const login = (usuario, senha) => {
    if (usuario === ""){
        throw new Error ("O Nome não pode ficar vazio")
    }
    if (Number(senha) === 0){
        throw new Error ("Senha invalida")
    }

    return ` Usuario ${usuario} cadastrado com sucesso`
}

try{
    console.log(login("Kauã", 12345678))
} catch (erro){
    console.log("Motivo do Erro: ", erro.message)
}finally{
    console.log("Sistema de login finalizado !")
}



const divisao = (a,b) => {
    if (b === 0){
        throw new Error("Esse valor não é divisivel")
    }
    return a / b
}

try{
    console.log(divisao(10, 2))
}catch (erro){
    console.log("Motivo do erro :", erro.message)
}finally{
    console.log("Sistema encerrado!")
}


const cadastroUsuario = (nome, idade) => {
    if (nome === ""){
        throw new Error("Nome não pode ficar vazio")
    }

    if(idade >= 18){
        console.log(`Olá ${nome} tudo bem?, você tem ${idade} anos né`)
    } else{
        return "Você é de menor"
    }
    return nome
}

try{
    console.log(cadastroUsuario("Kawaaa", 16))
}catch (erro){
    console.log("Erro :", erro.message)
}finally{
    console.log("Sistema finalizado!")
}


try {
    console.log(idade)
    throw new Error("Algo deu errado!")
} catch (erro){
    console.log("Erro:", erro.message)
}finally{
    console.log("Finalizou....")
}
 