

class ValidarFormulario {
    constructor() {
      this.formulario = document.querySelector('#formulario')
      this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)

        })

    }

    handleSubmit(e) {
         e.preventDefault()
            console.log('Iniciando....')

            const campValidado = this.camposValidados()

    }

     camposValidados() {
                let valid = true;

                 for (let errorText of this.formulario.querySelectorAll('.error-texto')) {
                    errorText.remove()
                }


                for (let campo of this.formulario.querySelectorAll('.validar')) {
                   
                    let label = campo.previousElementSibling.innerText
                    if(!campo.value) {
                        this.mostrarMensagem(campo, `Campo ${label} não pode estar em branco` )
                        valid = false
                    }


                     if(campo.classList.contains('cpf')) {
                        console.log('campo cpf')
                     if(!this.validaCPF(campo)) valid = false

                    }
                    
                    
                    if(campo.classList.contains('idade')) {
                        if(!this.validaIdade(campo)) valid = false
                    }



                    if(campo.classList.contains('senha')) {
                        if(!this.validaSenha(campo)) valid = false
                    }


                }


            return valid

    }

    mostrarMensagem(campo, mensagem) {
        const div = document.createElement('div')
        div.innerHTML = mensagem
        div.classList.add('error-texto')

        campo.insertAdjacentElement('afterend', div)
    }

    
    validaCPF(campo) {
        const cpf = new Cpf (campo.value)

        if(!cpf.validar()) {
            this.mostrarMensagem(campo, 'CPF Invalido.')
            return false
            
        }

        return true;
        
    }

    validaSenha(campo) {
        const senha = campo.value

        if(/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(senha)) {
           return true
        }else{
            this.mostrarMensagem(campo, 'A senha não cumpre os requisitos')
            return false
        }
          
    }

    validaIdade(campo) {
        const idade = Number(campo.value)

        if(idade < 0) {
            this.mostrarMensagem(campo, ' Idade Invalida !!')
            return false
        }

        if(idade < 18 ) {
            this.mostrarMensagem(campo, 'Você é menor de idade' )
            return false
        }else {
            return true
        }
    }

}

const valida = new ValidarFormulario()