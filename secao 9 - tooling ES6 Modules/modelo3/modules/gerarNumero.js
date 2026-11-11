
const gerarNumeros = (quantidade) => {
    const numerosGerados = Array.from({length: quantidade}, () => {
        const gerandoNumero = Math.random()
        return Math.floor(gerandoNumero * 10)
    })
    return numerosGerados
}

export default gerarNumeros