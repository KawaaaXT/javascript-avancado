
/*
const pessoa = {
    nome: "Kauã",

    sobreNome: "De Lima",

    idade: 21
}

const chave = 'nome'
const chave2 = 'sobreNome'
const chave3 = 'idade'

console.log(pessoa[chave], pessoa[chave2], pessoa[chave3])





const pessoa1 = new Object()

pessoa1.nome = 'Kaua';

pessoa1.sobreNome = 'De Lima';

pessoa1.idade = 21

delete pessoa1.idade

console.log(pessoa1)




const pessoa1 = new Object()

pessoa1.nome = 'Kaua';

pessoa1.sobreNome = 'De Lima';

pessoa1.idade = 21

pessoa1.falarNome = () => {
    return (`Meu Nome é ${pessoa1.nome}.  Meu Sobre Nome é : ${pessoa1.sobreNome}.   e tenho ${pessoa1.idade} anos`)
 
    
};

pessoa1.dataNascimento = () => {
    const data = new Date()

    return data.getFullYear() - pessoa1.idade
}


console.log(pessoa1.falarNome())

console.log(pessoa1.dataNascimento())


 // Function Fabrica
function criarPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };

}

const pessoa1 = criarPessoa('Kauã', 'Lima')

console.log(pessoa1.nomeCompleto)
*/


// Function Construtora
function Pessoa (nome, idade) {
    this.nome = nome;
    
    this.idade = idade;

   
}

const pessoa1 = new Pessoa("Ana", 21)
Object.freeze(pessoa1)

console.log(pessoa1)

