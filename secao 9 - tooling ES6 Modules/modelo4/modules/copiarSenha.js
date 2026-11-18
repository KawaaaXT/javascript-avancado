

const clipboard = navigator.clipboard
const copiarSenha = async (senha) => {
     if(!clipboard) {
        console.error("API Indisponivel")
        return false
     }

    try {
        await clipboard.writeText(senha) // escrevendo um texto na área de transferência.
        return true
    }catch(erro) {
        console.error (`Ocorreu um erro: ${erro}`)
        return false
    }

    
}

export default copiarSenha
