


const objA = {
    chaveA:  "A"

}

const objB = {
    chaveB: "B"
}

const objC = new Object()

objC.chaveC = "C"

// Juntando os 2 objetos

// Posso lê assim: Defina objA como prototype de objB
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveA)



function Pessoa (nome, sobrenome, idade) {
    this.nome = nome;

    this.sobrenome = sobrenome;

    this.idade = idade;

}

Pessoa.prototype.falar = function () {
    return ` Olá eu me chamo ${this.nome} e meu sobrenome é ${this.sobrenome} e eu tenho ${this.idade} Anos`
}

const pessoa1 = new Pessoa("Deyvid", "Ferreira", 21)

const pessoa2 = {
    nome: "Ana",
    sobrenome: "Luiza",
    idade: 22
}

const pessoa3 = Object.create(Pessoa.prototype, {
    roupa: {
        writable: true,
        enumerable: true,
        configurable: false,
        value: "Camisa Nike"
    }
})

Object.setPrototypeOf(pessoa2, Pessoa.prototype)
console.log(pessoa1.falar())
console.log(pessoa2.falar())
console.log(pessoa3.roupa())

/*
const pessoa3 = Object.create(Pessoa.prototype)
pessoa3.nome = "Jamille",
pessoa3.sobrenome = "Rebeca",
pessoa3.idade = 23
*/