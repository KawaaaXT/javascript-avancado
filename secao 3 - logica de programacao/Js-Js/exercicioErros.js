

const cadastrarUsuario = (nome, idade) => {
    if (nome === ""){
        throw new Error("Não pode nome Vazio")
    }

    if (idade < 18){
        throw new Error ("Você é menor de idade")
    }

    return ` Usuario ${nome} com ${idade} anos, foi cadastrado.`
}

try{
    console.log(cadastrarUsuario("Deyvid", 35))
}catch (erro){
    console.log(erro.message)
}



const dividir = (a,b) => {
    if (b === 0){
        throw new Error("Não é possivel dividir por 0")
    }

    return a / b
}

try {
    console.log(dividir(10, 2))
}catch (erro){
    console.log("Numero invalido")
}


const verificadorIdade = idade => {
    if (idade < 18){
        throw new Error("Você é menor de idade")
    }

    return "Acesso Permitido"
}

try{
    console.log(verificadorIdade(20))
}catch (erro){
    console.log("Você precisa ser adulto")
}

