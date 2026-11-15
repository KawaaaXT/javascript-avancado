

const clipboard = navigator.clipboard
const copiarSenha = async (senha) => {
     if(!clipboard) {
        console.error("API Indisponivel")
        return false
     }

    try {
        await clipboard.writeText(senha)
        return true
    }catch(erro) {
        console.log(`Ocorreu um erro: ${erro}`)
        return false
    }

    
}

export default copiarSenha
