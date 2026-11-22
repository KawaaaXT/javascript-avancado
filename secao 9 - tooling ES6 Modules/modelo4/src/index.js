
import './css/style.css'
import copiarSenha from '../modules/copiarSenha.js'
import gerarSenha from '../modules/gerarSenha.js'
import obterCaracteresPermitidos from '../modules/selecionarCaracteres.js'


const botao = document.getElementById('copiar')
const form = document.getElementById('formulario')
const quantidadeSenha = document.getElementById('quantidade')
const senha = document.getElementById('senha')
const checkBoxes = document.querySelectorAll(
    'input[name=caracteres]'
); // selecionando todos os input que contem o name caracteres


const iniciarGeradorSenha = () => {
    obterCheckBoxClicado()
    obterSubmitFormulario()
    obterClickBotaoCopiar()

}

const obterOpcoesSelecionadas = () => {
    const opcoesSelecionadas = []
    checkBoxes.forEach((checkbox) => {
        if(checkbox.checked) { // Verificando se algum checkbox esta marcado
            opcoesSelecionadas.push(checkbox.value)
        }
    })
    return opcoesSelecionadas
}


const obterCheckBoxClicado = () => {
    form.addEventListener('change', (evento) => { // Detectando  a alteração de estados
        if(evento.target.value === 'letras' || evento.target.value === 'numeros' || evento.target.value === 'simbolos') {
            console.log(evento.target.checked) // Estado do checkbox
        }
        if(evento.target.matches('input[type=checkbox]')) { // Verificando se o elemento é um input do tipo CheckBox
            console.log('Um CheckBox Foi Alterado')
        }
    })

}

const obterSubmitFormulario = () => {
    form.addEventListener('submit', (evento) => {
        evento.preventDefault()
        console.log('Formulario capturado.')
        const caracteresPermitidos = obterCaracteresSelecionados()
        const quantidade = Number(quantidadeSenha.value)
        const senhaGerada = gerarSenha(caracteresPermitidos, quantidade)
        senha.value = senhaGerada
    })
    
}

const obterClickBotaoCopiar = () => {
    botao.addEventListener('click', async (evento) => {
        evento.preventDefault() 
        console.log('Capturado....')
        const btCopiarSenha = await copiarSenha(senha.value)
        console.log(btCopiarSenha)

    })

}

const obterCaracteresSelecionados = () => {
    const caracteresPermitidos= obterOpcoesSelecionadas()
    const caracteresSelecionados = obterCaracteresPermitidos(caracteresPermitidos)
    return caracteresSelecionados

}

iniciarGeradorSenha()



