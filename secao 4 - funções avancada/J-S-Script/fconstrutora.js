
// function Construtora




function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa ("Kauã", 21)
const pessoa2 = new Pessoa ("Jamille", 19)
const pessoa3 = new Pessoa ("Domingues", 28)

console.log(pessoa1.nome, pessoa1.idade)
console.log(pessoa2.nome, pessoa2.idade)
console.log(pessoa3.nome, pessoa3.idade)



function Alunos (nome,idade,cidade){
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
}

const aluno1 = new Alunos ("Kauã", 21, "Porto Portugal")     
const aluno2 = new Alunos ("Daniel", 21, "Porto Portugal")
const aluno3 = new Alunos ("Domingues", 24, "Porto Portugal")

console.log(aluno1.nome, aluno1.idade, aluno1.cidade)
console.log(aluno2.nome, aluno2.idade, aluno2.cidade)
console.log(aluno3.nome, aluno3.idade, aluno3.cidade)