
const validarDados = ( caracteresPermitidos, quantidade) => {
    const validarCaracteres =  Array.isArray(caracteresPermitidos); // Se é ou nao um metodo estatico de Array
    if (quantidade <= 0) return false;
    if (!Number.isInteger(quantidade)) return false; // Sé ou nao um numero inteiro

    if (!validarCaracteres) return false // Se essa condicao for diferente de validarCaracteres ira me retornar false
    if(caracteresPermitidos.length === 0) return false

    return true
    
}

export default validarDados

