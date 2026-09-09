

const frontEnd = ["HTML", "CSS", "JavaScript"]
const beckEnd = ["Node.js", "Express", "PostgreSQL"]
const button = document.querySelector("#mostrar")
const ul = document.querySelector("#lista")

const tecnologias = frontEnd.concat(beckEnd)

button.addEventListener("click", () => {

    ul.innerText = ""
    for (let tecno of tecnologias) {
        const li = document.createElement('li')
        li.innerText = tecno

        ul.appendChild(li)

    }

})