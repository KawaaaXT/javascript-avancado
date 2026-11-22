
 
import validarDados from './validarDados.js'

const  gerarSenha = (caracteresPermitidos, quantidade) => {


     
     const validacao = validarDados(caracteresPermitidos,quantidade)
     if(!validacao) return false

    const todosCaracteres = caracteresPermitidos
    let senha = ''

    for (let i = 0; i < quantidade; i++ ) {
         const indiceAleatorio = Math.floor(Math.random() * todosCaracteres.length)
         senha += todosCaracteres[indiceAleatorio]
    };

    return senha

}




export default gerarSenha