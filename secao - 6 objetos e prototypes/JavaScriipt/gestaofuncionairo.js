
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
// Fim Da Seleção Dos Elemento

function validarDados (evento) { // Funcão Validação de dados
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

const funcionarios = [] // array vazio

function Funcionario (nome, idade, cargo, salario) { // Funcão Construtora 
    this.nome = nome;

    this.idade =  idade;

    this.cargo = cargo;

    this.salario = salario;

}

function cadastrarFuncionario () { // Funcão Cadastrar Funcionario
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

function mostrarFuncionario () { // Função Mostrar  Funcionario
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

function filtrarFuncionarios () { // Filtrando funcionarios
    ul.innerText = ""
    funcionarios.forEach(funcionario => {
        if(funcionario.cargo.toLowerCase().includes(pesquisaCargo.value.toLowerCase())) {
            const li = document.createElement("li")
            li.innerText = ` ${funcionario.nome} - ${funcionario.cargo}`

            ul.appendChild(li)
        }
    })
   
}

function mostrarTodos () { // funcao Mostrar Todos os funcionarios
    mostrarFuncionario()
}

function removerFuncionario (funcionario) { // funcao removendo funcionario
    const indice = funcionarios.indexOf(funcionario)

    if(indice !== -1) { // se o indice for diferente de -1 faça
        funcionarios.splice(indice, 1) // metodo splice
        mostrarFuncionario()
        atualizarResumo()
    }


}

function atualizarTotalFuncionarios () { // funcao atualizacao do total de funcionarios
    totalFuncionario.textContent = funcionarios.length
}

function calcularTotalSalarios () { // funcao calculando o total de salarios
    let total = funcionarios.reduce((acumulador, funcionario) =>  acumulador + funcionario.salario,  0) // método reduce
    totalSalario.textContent = `${total}€`

    return total // quero que me retorne total
}

function calcularMediaSalarial () { // funcao calculando a media Salarial (TOTAL DE SALARIOS)
     let totalSalarios = calcularTotalSalarios()
    if(funcionarios.length === 0) {
        mediaSalarial.textContent = "0€"
        return
    }else {
        let resultado = totalSalarios / funcionarios.length

        mediaSalarial.textContent = `${resultado.toFixed(2)}€`

    }
}

function atualizarResumo (){ // Função Atualizar o Resumo
    atualizarTotalFuncionarios()
    calcularMediaSalarial()
}

function limparInputs () { // funcao de limpar os inputs
    nome.value = ""
    idade.value = ""
    cargo.value = ""
    salario.value = ""
}

form.addEventListener("submit", validarDados) 

btnFiltro.addEventListener("click", filtrarFuncionarios)

btnMostraTodos.addEventListener("click", mostrarTodos)