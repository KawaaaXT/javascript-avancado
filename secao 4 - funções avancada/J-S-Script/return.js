



function criaMultiplicador (multiplicador){
    return function (n){
       return  n * multiplicador
    }
}
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(4))
console.log(triplica(5))
console.log(quadriplica(7))



/*
function criaMultiplicador (multiplicador){
    function multiplicacao (n){
        return n * multiplicador;
    }

    return multiplicacao;

};


/*
function duplicarValor (n){
    return n * 2
}
const resultado = duplicarValor(8)

console.log(resultado)



/*
function falarFrase (comeco){
    function falarResto (resto){
        return comeco + ' ' + resto
    }
    return falarResto
}

const olaWorld = falarFrase("Ola")
const resto = olaWorld("Mundo")
console.log(olaWorld, resto)



/*
const soma = (a,b) => {
    return a + b 

}

const resultado = soma(8,9)

console.log(resultado)
*/





