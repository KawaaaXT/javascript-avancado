
const contador = document.querySelector("#contador")
const btnDiminuir = document.querySelector("#diminuir")
const btnAumentar = document.querySelector("#aumentar")

let numero = 0

btnDiminuir.addEventListener("click", function () {
    if (numero > 0){
       numero--
    }
    contador.innerText = numero
})

btnAumentar.addEventListener("click", function () {
    numero++
    contador.innerText = numero
})