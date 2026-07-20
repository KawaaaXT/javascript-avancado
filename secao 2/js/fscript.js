
// Selecão dos elementos

const seuNome = document.querySelector('#nome')
const seuCargo = document.querySelector('#cargo')
const ordenado = document.querySelector('#salario')
const tempoEmpresa = document.querySelector('#tempo')
const form = document.querySelector('#formulario')
const resultado = document.querySelector('#resul')
const funcionarios = []

form.addEventListener('submit', iniciar)

// Fim Da Seleção dos elementos

// Função Principal

function iniciar(evento){
    evento.preventDefault()
    console.log('Tudo Ok')

    const dados = validarCampos()

    if(!dados){
        return
    }


    const novoFuncionario = criarFuncionario (
        seuNome.value,
        seuCargo.value,
        Number(ordenado.value),
        Number(tempoEmpresa.value),
        dados.nivel,
        dados.bonus
    )
    funcionarios.push(novoFuncionario)
    mostrarResultado(novoFuncionario)
    limparTela()
    console.log(novoFuncionario)

}; // Fim Da Função Principal


// Validação De Campos 

function validarCampos(){
    if (seuNome.value.trim() === '' || seuCargo.value.trim() === ''){
        alert(' \u{1F6A8} Nomes invalidos!')
        return false
    }

    if(Number(ordenado.value) <= 0 || Number(tempoEmpresa.value) < 0){
        alert('\u{1F6A8} Valores invalidos!')
        return false
    }
    
    const tempodeEmpresa = Number(tempoEmpresa.value)

    let nivel

    if(tempodeEmpresa < 2){
        nivel = 'Junior'
    }else if (tempodeEmpresa <= 5){
        nivel = 'Pleno'
    }else{
        nivel = 'Sênior'
    }

    const salario = Number(ordenado.value)
    let bonus = 0

    if(nivel === 'Junior'){
        bonus = salario * 0.05
    }else if (nivel === 'Pleno'){
        bonus = salario * 0.10
    }else {
        bonus = salario * 0.20
    }

    return{
        nivel,
        bonus
    }

}; // Fim da função validar campos

// Função criarFuncionario 

function criarFuncionario (nome, cargo, salario, tempo, nivel, bonus){
   return{
    nome,
    cargo,
    salario,
    tempo,
    nivel,
    bonus
   }

}; // Fim da função criar Funcrionario


// Função mostrar resultado

function mostrarResultado(results){
    resultado.innerHTML += ` 
        <p>
           Nome : ${results.nome}

        </p> <br>

        <p>
           Cargo : ${results.cargo}

        </p> <br>

        <p>
           Salario : R$ ${results.salario} 

        </p> <br>

        <p>
           Tempo : ${results.tempo}

        </p> <br>

        <p>
           Nivel : ${results.nivel}


        </p> <br>

        <p>
           Bonus : R$ ${results.bonus.toFixed(2)} 


        </p> <br>
    
    `
}; // fim da função mostrar resultado


// Função Limpar Tela

function limparTela(){
    seuNome.value = ''
    seuCargo.value = ''
    ordenado.value = ''
    tempoEmpresa.value = ''
    
}; // Fim da função limpar tela
