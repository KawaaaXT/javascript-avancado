

function Pessoa (nome,idade) {
    this.nome = nome;

    this.idade = idade;
}


function Funcionario (nome, idade,  senha, email, codigo){
    Pessoa.call(this, nome, idade)

    this.senha = senha;

    this.email = email

    Object.defineProperty(this, 'codigo', {
        value: codigo,
        writable: false,
        enumerable: true,
        configurable: true
    })
}
Object.setPrototypeOf(Funcionario.prototype, Pessoa.prototype)

Funcionario.prototype.validarNome = function () {
    const nome = /^[A-Z][a-z]{2,}$/
    return nome.test(this.nome)
}

Funcionario.prototype.validarIdade = function () {
    return Number.isInteger(this.idade) && this.idade >= 18 && this.idade <= 65
}

Funcionario.prototype.validarEmail = function () {
    const email = /^.+@(gmail|hotmail|outlook)\.com$/
    return email.test(this.email)
}

Funcionario.prototype.validarSenha = function () {
    const senha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/ 
    return senha.test(this.senha)
}

Funcionario.prototype.validarCodigo = function () {
    const codigo = /^FUN-\d{4}$/
    return codigo.test(this.codigo)
}

Funcionario.prototype.validarCadastro = function () {
    const validacaoNome = this.validarNome()
    const validacaoIdade = this.validarIdade()
    const validacaoEmail = this.validarEmail()
    const validacaoSenha = this.validarSenha()
    const validacaoCodigo = this.validarCodigo()

    return validacaoNome && validacaoIdade &&  validacaoEmail && validacaoSenha && validacaoCodigo
    
}

const funcionario1 = new Funcionario("Kauã", 21, "Kaua12", "kaua1234@hotmail.com", "FUN-85")
console.log(funcionario1.validarCadastro())