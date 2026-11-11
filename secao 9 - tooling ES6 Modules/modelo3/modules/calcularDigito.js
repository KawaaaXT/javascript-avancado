


const primeiroDigito = (numerosGerados) => {

    const somaPonderada = calcularSomaPonderada(numerosGerados, 10)
    
    const resto = somaPonderada % 11
    let primeiroNumero  = 11 - resto

    if(primeiroNumero >= 10) {
        primeiroNumero = 0
    }

    return primeiroNumero

}

const segundoDigito = (numerosGerados, primeiroNumero) => {
    const novosNumeros = numerosGerados.concat(primeiroNumero)
    const somaPonderada = calcularSomaPonderada(novosNumeros, 11)

    const resto = somaPonderada % 11
    let segundoNumero = 11 - resto

    if(segundoNumero >= 10) {
        segundoNumero = 0
    }
    return segundoNumero
}

const calcularSomaPonderada = (numeros, pesoInicial) => {
    let peso = pesoInicial
    const somaCalculada = numeros.reduce((acumulador, valor) => {
        acumulador += (peso * Number(valor))
        peso--
        return acumulador
    }, 0)

    return somaCalculada


}

export {primeiroDigito, segundoDigito, calcularSomaPonderada};
