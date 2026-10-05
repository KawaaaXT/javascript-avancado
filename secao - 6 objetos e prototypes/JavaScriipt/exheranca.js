
function Pessoa (nome, idade) {
    this.nome = nome;

    this.idade = idade;
}

function Funcionario (nome, idade, cargo, salario) {
    Pessoa.call(this, nome, idade) // Herdando as propriedades de pessoa
    this.cargo = cargo;
    
    Object.defineProperty(this, 'salario', { // definindo a propriedade salario
        value: salario, 
        writable: true,
        enumerable: true,
        configurable: false
    })
    
}


Funcionario.prototype = Object.create(Pessoa.prototype) // Criando um novo objeto cujo o prototype sera Pessoa.prototype e colocando esse objeto como Funcionario.prototype
Funcionario.prototype.constructor = Funcionario // Aqui estamos dizendo que o construtor de funcionario é a Funcionario

Pessoa.prototype.apresentar = function () { 
    return ` Olá Meu Nome é  ${this.nome} e tenho ${this.idade} anos`
};

Funcionario.prototype.aumentarSalario = function (porcentagem) {
    this.salario = this.salario + (this.salario * (porcentagem / 100))
}

Funcionario.prototype.mostrarDados = function () {
    return ` ${this.nome} | ${this.idade} | ${this.cargo} | ${this.salario}`
}


const funcionario1 = new Funcionario(
    "Kauã",
    20,
    "Programador",
    1800
)



funcionario1.apresentar()

funcionario1.aumentarSalario(10)

funcionario1.mostrarDados()

console.log(funcionario1 instanceof Funcionario) 

console.log(funcionario1 instanceof Pessoa)

console.log(Object.hasOwn(funcionario1, "nome")) // Aqui estamos perguntando A Prorpiedade nome, possui em funcionario ? resultado : false
console.log(Object.hasOwn(funcionario1, "apresentar")) // Aqui a mesma coisa , o método apresentar possui em funcionario : Resultado : false

console.log(Object.getOwnPropertyDescriptor(funcionario1, "salario"))