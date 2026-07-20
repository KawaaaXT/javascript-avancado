const seuNumber = document.querySelector('#seuNumero')
const texTo = document.querySelector('#texto')
let digiteUmNumero = Number(prompt('Digite um numero'))


while (Number.isNaN(digiteUmNumero) || digiteUmNumero <= 0 ){
    alert('Digite Um Numero Valido')
   digiteUmNumero = Number(prompt('Digite Um numero'))
}


if (digiteUmNumero > 0){
    seuNumber.innerHTML = ` Seu numero é : ${digiteUmNumero} <br>`
    texTo.innerHTML += ` A Raiz Quadrada de ${digiteUmNumero} é : ${Math.sqrt(digiteUmNumero)} <br>`
}

if (Number.isInteger(digiteUmNumero)) {
    texTo.innerHTML += ` O Numero ${digiteUmNumero}  é um inteiro :    ${Number.isInteger(digiteUmNumero)} <br> `
} else {
    texTo.innerHTML += ` O Numero ${digiteUmNumero} é um inteiro :  ${Number.isInteger(digiteUmNumero)} <br>`
}
 

if (Number.isNaN(digiteUmNumero) ) {
    texTo.innerHTML += ` Esse numero é [NaN] : ${Number.isNaN(digiteUmNumero)} <br>  `
}else {
    texTo.innerHTML += ` Esse numero é [NaN]: ${Number.isNaN(digiteUmNumero)} <br>`
}
    texTo.innerHTML += ` Arredondando para baixo : ${Math.floor(digiteUmNumero)} <br>`

    texTo.innerHTML += ` Arredondando para cima : ${Math.ceil(digiteUmNumero)} <br>`

    texTo.innerHTML += ` Seu numero ${digiteUmNumero} com [2 casas decimais] : ${digiteUmNumero.toFixed(2)}`
