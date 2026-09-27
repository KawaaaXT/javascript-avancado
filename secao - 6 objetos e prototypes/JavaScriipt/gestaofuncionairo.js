
// Seleceção dos elementos

const nome = document.querySelector("#nome")

const idade = document.querySelector("#idade")

const cargo = document.querySelector("#cargo")

const salario = document.querySelector("#salario")

const form = document.querySelector("#form-funcionario")

const pesquisaCargo = document.querySelector("#pesquisa-cargo")

const btnFiltro = document.querySelector("#btn-filtrar")

const btnMostraTodos = document.querySelector("#btn-mostrar-todos")

const listaFuncionarios = document.querySelector("#lista-funcionarios")

const ul = document.querySelector("#list-official")

const totalFuncionario = document.querySelector("#total-funcionarios")

const totalSalario = document.querySelector("#total-salarios")

const mediaSalarial = document.querySelector("#media-salarial")


function validarDados (evento) {
    evento.preventDefault()
   
    if(nome.value.trim() === "") {
        alert("Nome Obrigatorio!!")
        return
    }

    if(idade.value.trim() === "" || Number.isNaN(Number(idade.value))) {
        alert ("Idade Não Valida") 
        return
    }

    if(cargo.value.trim() === "") {
        alert("Cargo Obrigatorio!")
        return
    }

    if(salario.value.trim() === "" || Number.isNaN(Number(salario.value))) {
        alert("Salário Invalido ")
        return
    }

    cadastrarFuncionario()

 
}

const funcionarios = []

function Funcionario (nome, idade, cargo, salario) {
    this.nome = nome;

    this.idade =  idade;

    this.cargo = cargo;

    this.salario = salario;

}

function cadastrarFuncionario () {
    const novoFuncionario = new Funcionario (
        nome.value,
        Number(idade.value),
        cargo.value,
        Number(salario.value)
    )

    funcionarios.push(novoFuncionario)

    mostrarFuncionario()
    atualizarResumo()
    limparInputs()

    console.log(funcionarios)
}

function mostrarFuncionario () {
    ul.innerText = ""
    funcionarios.forEach(funcionario => {
        const li = document.createElement("li")
        const button = document.createElement("button")
         button.textContent = "Remover"
         li.textContent = `${funcionario.nome} - ${funcionario.idade} - ${funcionario.cargo} - ${funcionario.salario}`
         li.appendChild(button)
         ul.appendChild(li)
         button.addEventListener("click", () => {
            removerFuncionario(funcionario)
         })
    })
}

function filtrarFuncionarios () {
    ul.innerText = ""
    funcionarios.forEach(funcionario => {
        if(funcionario.cargo.toLowerCase().includes(pesquisaCargo.value.toLowerCase())) {
            const li = document.createElement("li")
            li.innerText = ` ${funcionario.nome} - ${funcionario.cargo}`

            ul.appendChild(li)
        }
    })
   
}

function mostrarTodos () {
    mostrarFuncionario()
}

function removerFuncionario (funcionario) {
    const indice = funcionarios.indexOf(funcionario)

    if(indice !== -1) {
        funcionarios.splice(indice, 1)
        mostrarFuncionario()
        atualizarResumo()
    }


}

function atualizarTotalFuncionarios () {
    totalFuncionario.textContent = funcionarios.length
}

function calcularTotalSalarios () {
    let total = funcionarios.reduce((acumulador, funcionario) =>  acumulador + funcionario.salario,  0)
    totalSalario.textContent = `${total}€`

    return total
}

function calcularMediaSalarial () {
     let totalSalarios = calcularTotalSalarios()
    if(funcionarios.length === 0) {
        mediaSalarial.textContent = "0€"
        return
    }else {
        let resultado = totalSalarios / funcionarios.length

        mediaSalarial.textContent = `${resultado.toFixed(2)}€`

    }
}

function atualizarResumo (){
    atualizarTotalFuncionarios()
    calcularMediaSalarial()
}

function limparInputs () {
    nome.value = ""
    idade.value = ""
    cargo.value = ""
    salario.value = ""
}

form.addEventListener("submit", validarDados) 

btnFiltro.addEventListener("click", filtrarFuncionarios)

btnMostraTodos.addEventListener("click", mostrarTodos)