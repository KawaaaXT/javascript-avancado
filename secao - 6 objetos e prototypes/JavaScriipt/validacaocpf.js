
const cpf = '705.484.450-52'
const cpfLimpo = cpf.replace(/\D/g, '') // Substituindo globalmente todos os caracteres que não são números por nada.

function validarCpf () {
    if(cpfLimpo.length !== 11) { // Verificando se o cpf contem 11 numeros, caso seja diferente ira me retorna false.
        return false
    }

    if(/^(\d)\1{10}$/.test(cpfLimpo)) { // Se o cpfLimpo corresponder ao padrão de 11 números iguais ira me retorna false.
        return false
    }

    let soma = 0

    for (let i = 0; i < 9; i++) {
        soma += Number(cpfLimpo[i]) * (10 - i) // Pega o número do CPF na posição i, multiplica por 10 menos i, e adiciona o resultado à variável soma.
    }

    const resto = soma % 11 // resto recebe o resto da divisão de soma por 11."

    let primeiroDigito = 11 - resto // O primeiro dígito recebe 11 menos o resto da divisão da soma por 11.

    if(primeiroDigito >= 10) { // se primeiroDigito for maior ou igual a 10, primeiroDigito recebe 0
        primeiroDigito = 0
    }

    if(primeiroDigito !== Number(cpfLimpo[9])){ // se primeiroDigito for estritamente diferente do CPF retorne false 
        return false
    }

    let soma2 = 0
    let numero 

    for (let i = 0; i < 10; i++) {
         if(i === 9){
            numero = primeiroDigito
        }else {
           numero = cpfLimpo[i]
        }

        soma2 += Number(numero) * (11- i) // Pega o numero do CPF na posicao i , multiplica por 11 menos i, e adiciona o resultado a variavel soma2

    }
    const resto2 = soma2 % 11 // resto2 recebe o resultado da divisao da soma2 por 11

    let segundoDigito = 11 - resto2 // o segundo digito recebe 11 menos o resto da divisao da soma2 por 11

    if(segundoDigito >= 10) {
        segundoDigito = 0
    }

    if(segundoDigito !== Number(cpfLimpo[10])) {
        return false
    }

    return true

} // fim da função validação de CPF