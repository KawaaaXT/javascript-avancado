

console.log("Carregando...")
let contador = 0
const carregando = setInterval(() => {
    contador ++
    
    console.log(".");

    if (contador === 5){
        console.log("Carregamento Concluido")
        clearInterval(carregando)

    }

}, 1000)

console.log(carregando)






let contador2 = 0

const  contandoSegundos = setInterval(() => {
    contador2 ++
    console.log(contador2)

    if (contador2 === 5){
        clearInterval(contandoSegundos)
    }

}, 1000);


console.log(contandoSegundos)




