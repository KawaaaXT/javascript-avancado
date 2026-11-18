
const validarDados = ( numeros, letras, simbolos, quantidade) => {
    const validarNumeros =  Array.isArray(numeros); // Se é ou nao um metodo estatico de Array
    const validarLetras = Array.isArray(letras); // Se é ou nao um metodo estatico de Array
    const validarSimbolos = Array.isArray(simbolos); // Se é ou nao um metodo estatico de Array
    if (quantidade <= 0) return false;
    if (!Number.isInteger(quantidade)) return false; // Sé ou nao um numero inteiro

    if (!validarNumeros || !validarLetras || !validarSimbolos) return false // Se essa condicao for diferente de validarNumeros, validarLeteras e ValidarSimbolos, ira me retornar false
    if(numeros.length === 0 && letras.length === 0 && simbolos.length === 0) return false

    return true
    
}

export default validarDados

