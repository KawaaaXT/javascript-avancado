
function Funcionario (nome, cargo, salario) {
    this.nome = nome;

    this.cargo = cargo;

    this.salario = salario;
}



// Instancia


Funcionario.prototype.apresentar = function () {
    console.log(` Olá Meu nome é ${this.nome} e sou ${this.cargo}`)
}

Funcionario.prototype.aumentarSalario = function (porcentagem) {
   this.salario=  this.salario + (this.salario * porcentagem / 100)
}

const funcionario1 = new Funcionario("Kauã", "Programador", 1800)
const funcionario2 = new Funcionario("Jamille", "Designer", 1500)
funcionario1.aumentarSalario(20)
funcionario2.aumentarSalario(35)
console.log(funcionario1.salario)
console.log(funcionario2.salario)