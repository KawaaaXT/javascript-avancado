
const contador = document.querySelector("#contador")
const buttonIniciar = document.querySelector("#button-iniciar")
const buttonPause = document.querySelector("#button-pausar")
const buttonZerar = document.querySelector("#button-zerar")

let segundos = 0
let intervalo 


const horasTimer = segundos => {
    const data = new Date (segundos * 1000)
    return data.toLocaleString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "GMT",
        second: "2-digit"
    })
}

const iniciar = (e) => {
    e.preventDefault()
    console.log("Tudo Ok")
    
    if (intervalo){
        return
    }

    intervalo = setInterval(() => {
        segundos++
        console.log(segundos)
        const horas = horasTimer(segundos)
        contador.textContent = `${horas}`
        contador.classList.add("whiteStart")
        contador.classList.remove("red")
    }, 1000);

  
}

const pausar = () => {
    if (intervalo){
        clearInterval(intervalo)
        intervalo = null
        contador.classList.remove("whiteStart")
        contador.classList.add("bluePause")
    }
   
 
}

const zerar = () => {
    clearInterval(intervalo)
    segundos = 0
    intervalo = null
    const hours = horasTimer(segundos)
    contador.textContent = hours
    contador.classList.add("whiteStart")
    contador.classList.remove("blue")
  
}

document.addEventListener("click", (e) => {
    console.log(e.target)
})
buttonIniciar.addEventListener("click", iniciar)
buttonPause.addEventListener("click", pausar)
buttonZerar.addEventListener("click", zerar)