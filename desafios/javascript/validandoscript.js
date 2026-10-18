
const nome = document.querySelector('#nome')
const idade = document.querySelector("#idade")
const cpf = document.querySelector('#cpf')
const senha = document.querySelector("#senha")

class ValidarFormulario {
    constructor(nome, idade, senha, cpf){
        this.nome = nome.value;
        this.idade = idade.value;
        this.senha = senha.value;
        Object.defineProperty(this, 'cpf', {
            value: cpf.value,
            enumerable: true,
            writable: true,
            configurable: false
        })
    } // Fim do constructor

    validar() {

    }

    validarIdade() {
        let idade = Number(this.idade)

        if(idade === '') {
            return false
        }

        if(idade < 0) {
            return false
        }

        if(idade < 18 ){
            return false
        }else {
            return true
        }
    }
}