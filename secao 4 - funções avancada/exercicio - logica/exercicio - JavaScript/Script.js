
const percorrer = elemento => {
    console.log(elemento)

    elemento.classList.add("selecionado")

    for (let filho of elemento.children) {
        percorrer(filho)
    }
}

const content = document.querySelector("#container")
percorrer(content)


