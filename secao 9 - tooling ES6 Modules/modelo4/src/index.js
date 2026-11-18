
import './css/style.css'
import gerarSenha from './modules/gerarSenha.js'
import obterCaracteresPermitidos from './modules/selecionarCaracteres.js'
import copiarSenha from './modules/copiarSenha.js'

const botao = document.getElementById('copiar')
const form = document.getElementById('formulario')
const senha = document.getElementById('senha')
const checkBoxes = document.querySelectorAll(
    'input[name=caracteres]'
); // selecionando todos os input que contem o name caracteres


const iniciarGeradorSenha = () => {
    obterCheckBoxClicado()S
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
            console.log(evento.target.checked)
        }
        if(evento.target.matches('input[type=checkbox]')) { // Verificando se o elemento é um input do tipo CheckBox
            console.log('Um CheckBox Foi Alterado')
        }

        obterCaracteresSelecionados()S
    })

}

const obterSubmitFormulario = () => {
    form.addEventListener('submit', (evento) => {
        evento.preventDefault()
        console.log('Formulario capturado.')
        const caracteresSelecionados = obterCaracteresSelecionados()
        const senhaGerada = gerarSenha(caracteresSelecionados)
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
    const opcoesEscolhidas = obterOpcoesSelecionadas()
    const caracteresSelecionados = obterCaracteresPermitidos(opcoesEscolhidas)
    return caracteresSelecionados

}

iniciarGeradorSenha()



