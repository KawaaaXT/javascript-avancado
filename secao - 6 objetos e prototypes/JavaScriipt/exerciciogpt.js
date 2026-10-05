

function Usuario (nome, senha, email) {
    this.nome = nome;

    this.senha = senha;

    this.email = email
}

Usuario.prototype.validarEmail = function () {
    const emailLimpo = /^.+@(gmail|hotmail)\.com$/
     return emailLimpo.test(this.email) // Teste o valor de this.email usando as regras da Regex emailLimpo
}

Usuario.prototype.validarSenha = function () {
    const senhaLimpa = /^(?=.*[a-z])(?=.*\d).{8,}$/ 
     return senhaLimpa.test(this.senha) // Teste o valor de this.senha usando as regras da Regex senhaLimpa
}

Usuario.prototype.validaCadastro = function () {
    const emailValido = this.validarEmail()
    const senhaValida = this.validarSenha()
    return emailValido && senhaValida
}

const usuario1 = new Usuario ("Kauã", "Kaua123456", "kaua123@gmail.com")

console.log(usuario1.validaCadastro())