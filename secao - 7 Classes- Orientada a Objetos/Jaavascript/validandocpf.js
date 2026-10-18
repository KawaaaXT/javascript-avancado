
class Cpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpf.replace(/\D/g, ''),
            enumerable: true,
            writable: false,
            configurable: false
        })
    }

    validar() {
        if(this.cpfLimpo.length !== 11) return false // se cpfLimpo nao tiver 11 digitos retornara false
        if(/^(\d)\1{10}$/.test(this.cpfLimpo)) return false // se o cpf for uma sequencia repetida por exemplo (111.111.111-11) ele me retornara false
        if(!this.validarPrimeiroDigito()) return false // se minha função validarPrimeiroDigito  não for verdadeira me retornara  false
        if(!this.validarSegundoDigito()) return false // se minha funcao validarSegundoDigito não for verdadeira me retornara false

        return true // e se todos os verificadores passarem , o  meu método retornara true (verdadeiro)
       
    }

    validarPrimeiroDigito(){
        const cpfBase = Array.from(this.cpfLimpo.slice(0, 9)); // Transformando meu cpfLimpo em um array 
        let peso = cpfBase.length + 1 // Obetendo peso pois o meu cpfBase Começa com 9 entao so acrescentei o ( + 1) para Obter o peso certo 
        const somaMultiplicacoes = cpfBase.reduce((acumulador, valor) => {
            acumulador += (peso * Number(valor))
            peso--
            return acumulador
        }, 0)

        const resto = somaMultiplicacoes % 11 // resto recebe o resto da divisão de somaMultiplicacoes e divdir por 11
        let primeiroDigito = 11 - resto // O primeiro dígito recebe 11 menos o resto da divisão da somaMultiplicacoes por 11.
        if(primeiroDigito >= 10) { // Se primeiroDigito For Maior ou igual a 10 primeiroDigito recebera 0
            primeiroDigito = 0
        }

        if(primeiroDigito !== Number(this.cpfLimpo.slice(9, 10))) return false // slice(9,10) O primeiro dígito verificador, e Se o primeiroDigito nao corresponder a cpfLimpo ele ira me retorna False

        return true // e se tudo estiver ok o meu metodo ira retorna true (Verdadeiro)
    }


    validarSegundoDigito () {
        const cpfBase = Array.from(this.cpfLimpo.slice(0, 10)) // Obétemos os primeiros 10 digitos e transformamos em array 
        let peso = cpfBase.length + 1 // Obetendo peso pois o meu cpfBase Começa com 10 entao so acrescentei o ( + 1) para Obter o peso certo 
        const total = cpfBase.reduce((acumulador, valor) => { 
            acumulador += (peso * Number(valor)) 
            peso--
            return acumulador
        }, 0)

        const resto = total % 11 // Resto recebe o resto da divisão de total e dividir por 11
        let segundoDigito = 11 - resto // o segundoDigito recebe 11 menos o resto da divisao de total por 11
        if(segundoDigito >= 10) { // Se segundoDigito For Maior ou igual a 10 segundoDigito recebera 0
            segundoDigito = 0
        }
        if(segundoDigito !== Number(this.cpfLimpo.slice(10, 11)))  return false // Slice(10, 11) Segundo digito verificador, e se segundoDigito não corresponder a cpfLimpo ira me retorna false

        return true // e se tudo estiver ok o meu metodo ira retorna true (Verdadeiro)

    }
    }


const cpfValido = new Cpf ('111.111.111-11')

console.log(cpfValido.validarPrimeiroDigito())
console.log(cpfValido.validarSegundoDigito())
