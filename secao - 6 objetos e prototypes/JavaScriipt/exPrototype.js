
/*
const pessoa = new Object()
pessoa.nome = "Kauã";
pessoa.idade = 21

 


console.log(pessoa)
console.log(Object.getPrototypeOf(pessoa))

console.log(Object.getPrototypeOf(pessoa) === Object.prototype)


function Pessoa (nome, idade, lingua) {
    this.nome = nome;
    this.idade = idade;
    this.lingua = lingua
}

Pessoa.prototype.apresentar = function () {
    console.log(` Olá meu nome é ${this.nome} e tenho ${this.idade} anos. E estou atualmente a linguagem ${this.lingua}`)
    
}

const pessoa1 = new Pessoa("Kauã", 21, "JavaScript")
const pessoa2 = new Pessoa("Marilia", 24, "Phayton")
console.log(Pessoa)
console.log(pessoa1.apresentar())
console.log(pessoa2.apresentar())







const animal = {
    vivo: true,

    respirar() {
        console.log('O animal está respirando');
    }
};

const cachorro = {
    nome: 'Thor'
};

Object.setPrototypeOf(cachorro, animal) // Defina o objeto `animal` como prototype do objeto `cachorro`
                       ↑           ↑
                   objeto que   prototype
                     recebe     

console.log(cachorro.nome)
console.log(cachorro.vivo)
console.log(cachorro.respirar())

*/



const funcionario = {
    empresa: "TechCode",

    apresentarEmpresa() {
        console.log(`Eu trabalho na empresa ${this.empresa}`);
    }
};

const programador = {
    nome: "Kauã",
    linguagem: "JavaScript"
};

Object.setPrototypeOf(programador, funcionario) // Defina o objeto `funcionario` como prototype do objeto `programador`
      /*                ↑             ↑
                   objeto que      prototype
                     recebe                         */   

console.log(programador.nome)
console.log(programador.linguagem)
console.log(programador.empresa)
programador.apresentarEmpresa()

console.log(Object.getPrototypeOf(programador) === funcionario)
console.log(Object.hasOwn(programador, 'empresa'))
