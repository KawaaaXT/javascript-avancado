
const form = document.querySelector("#formulario")
const tarefa = document.querySelector("#tarefa")
const ul = document.querySelector("#lista-tarefas")


// função validacao 
const validacao = () => {
     if (tarefa.value.trim() === ""){
        alert("Campo invalido")
        return false
    }

    return true

}
// função principal
const adicionar = e => {
    e.preventDefault()
    console.log("Tudo Pronto!")

    const saveValidacao = validacao()
     if (!saveValidacao){
        return 
    }

        const li = document.createElement("li")
          li.innerText = tarefa.value
          tarefa.value = ""


        const buttonApagar = document.createElement("button")
         buttonApagar.innerText = "APAGAR"
         buttonApagar.classList.add("button-apagar")

        buttonApagar.addEventListener("click" , (event) => {
         const li = event.target.parentElement
          li.remove()
          salvarTarefas()

        })
        
        li.appendChild(buttonApagar)
        ul.appendChild(li)
        tarefa.focus()

        salvarTarefas()
}



// Função Salvar Tarefas !
const salvarTarefas = () => {
    const saveTarefas = ul.querySelectorAll("li")
    const listaTarefas = []
    for (let tarefas of saveTarefas){
         let tarefaTexto = tarefas.innerText
         tarefaTexto = tarefaTexto.replace("APAGAR", " ").trim()
        
         listaTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('ul', tarefasJSON)
    console.log(listaTarefas)
}


// funcao adicionando Tarefas Salvas
const adicionarTarefasSalvas = () => {
    const tarefas = localStorage.getItem('ul')
    const listaDeTarefas = JSON.parse(tarefas) 

    for (let tarefa of listaDeTarefas){
        const li = document.createElement('li')
        const btnApagar = document.createElement('button')
        li.innerText = tarefa
        li.appendChild(btnApagar)
        ul.appendChild(li)


    }
}
adicionarTarefasSalvas()



tarefa.addEventListener("keypress", (e) => {
    if(e.keyCode === 13){
        console.log("Enter Pressionado")
    }
})



form.addEventListener("submit", adicionar)

