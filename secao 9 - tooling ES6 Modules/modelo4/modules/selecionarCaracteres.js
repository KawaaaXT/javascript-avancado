
/*
Onde você vai armazenar as letras maiúsculas?
Onde vai armazenar as minúsculas?
Como vai representar os números e símbolos?
Como vai identificar quais categorias foram selecionadas?
Como vai retornar todos os caracteres permitidos para a próxima função?
*/

const obterCaracteresPermitidos = () => {
    const letrasDisponiveis = "ABCDEFGHIJKLNMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;
    const letrasArray = Array.from(letrasDisponiveis)
    const numerosDisponiveis = "0123456789" ;
    const numerosArray = Array.from(numerosDisponiveis)
    const simbolosDisponiveis = "!@#$%^&*()-_+=[]{};:,.<>/?|~`";
    const simbolosArray = Array.from(simbolosDisponiveis)
    
    return{
        letrasArray,
        numerosArray,
        simbolosArray
    }

}

export default obterCaracteresPermitidos