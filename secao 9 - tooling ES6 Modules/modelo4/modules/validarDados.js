
const validarDados = (quantidade, numeros, letras, simbolos) => {
    const validarNumeros =  Array.isArray(numeros);
    const validarLetras = Array.isArray(letras);
    const validarSimbolos = Array.isArray(simbolos);
    if (quantidade <= 0) return false;
    if (!Number.isInteger(quantidade)) return false;

    if (!validarNumeros || !validarLetras || !validarSimbolos) return false
    if(numeros.length === 0 && letras.length === 0 && simbolos.length === 0) return false

    return true
    
}

export default validarDados

