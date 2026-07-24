
// Seleção dos elementos

const form = document.querySelector('#formulario')
const nome = document.querySelector('#nome')
const idade = document.querySelector('#idade')
const seuPeso = document.querySelector('#peso')
const suaAltura = document.querySelector('#altura')
const resul = document.querySelector('#resultado')
const pacientes = []

form.addEventListener('submit', iniciar)
// Fim Da Seleçao

// ação principal 
function iniciar(evento){
    evento.preventDefault()
    console.log('Entrou no iniciar')
    const validar = validarCampos()
    if(!validar.valido){
        return true
    }

    const peso = Number(seuPeso.value.replace(",", "."))
    const altura = Number(suaAltura.value.replace(",", "."))
    const imc = peso / (altura ** 2)

    const paciente = criaPaciente(
        nome.value,
        idade.value,
        peso,
        altura,
        imc,
        validar.nivel
    ) 
    pacientes.push(paciente)
    mostrarResultado(paciente,)
    limparTela()
    console.log(paciente)

}

function validarCampos(){
    const peso = Number(seuPeso.value.replace(",", "."))
    const altura = Number(suaAltura.value.replace(",", "."))
    if(Number.isNaN(peso)  || Number.isNaN(altura) ){
        alert('Numeros Invalidos')
        return false;
    }
    if (nome.value.trim() === '' || Number(idade.value) < 0){
        alert('Nome e senha invalidos!')
        return false
    }
    


    const imc = peso / (altura ** 2)
    let nivel
   if (imc < 18.5){
    nivel = 'Abaixo do peso '

   }else if (imc < 24.9){
    nivel = 'Peso Normal '

   }else if (imc < 29.9){
    nivel = 'SobrePeso '

   }else if (imc < 34.9){
    nivel = 'Obesidade Grau 1 '

   }else if (imc < 39.9){
    nivel = 'Obesidade Grau 2 '

   }else {
    nivel = 'Obesidade Grau 3 '
   }

  
  
   
  return {
    valido: true,
    nivel,
    nome,
    idade
  };
  
}

function limparTela(){
    nome.value = ''
    idade.value = ''
    seuPeso.value = ''
    suaAltura.value = ''
}

function mostrarResultado(paciente, cor){
    resul.innerHTML = `
     Seu Nome é : ${paciente.nome} <br>
     Voce tem : ${paciente.idade} Anos <br>
     Seu peso é : ${paciente.peso} KG <br>
     Sua Altura é : ${paciente.altura} M <br>
     Seu Imc é : ${paciente.imc.toFixed(2)} <br>
     Classificação : ${paciente.nivel}  
    `
}

function criaPaciente (nome, idade, peso, altura, imc, nivel){
    return{
        nome,
        idade,
        peso,
        altura,
        imc,
        nivel
       
    }
}

