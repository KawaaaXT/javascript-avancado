
 
import validarDados from './validarDados.js'

const  gerarSenha = (numeros,letras, simbolos, quantidade) => {

     const validacao = validarDados(numeros,letras,simbolos,quantidade)
     if(!validacao) return false

    const todosCaracteres = numeros.concat(letras,simbolos)
    let senha = ''

    for (let i = 0; i < quantidade; i++ ) {
         const indiceAleatorio = Math.floor(Math.random() * todosCaracteres.length)
         senha += todosCaracteres[indiceAleatorio]
    };

    return senha

}




export default gerarSenha