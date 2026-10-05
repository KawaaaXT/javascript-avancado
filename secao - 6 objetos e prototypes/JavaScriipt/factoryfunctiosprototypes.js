
// factory function

function criarPessoa (nome,sobrenome, idade,ano){
    const pessoaPrototype = Object.assign({}, falar, beber, comer) //{ ...falar, ...beber, ...comer }  O Rest Operator faz a mesma coisa que o Object.assign
      

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
        idade: {value: idade},
        ano: {value: ano}
    })
}

const falar = {
     falar() {
            console.log(`${this.nome} esta Dizendo Olá`)
        }

}

const beber = {
     beber() {
            console.log(`${this.nome} está tomando algo`)
        }

}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo algo`)
    }
}

const pessoa1 = criarPessoa("Kauã", "De Lima", 21, 2005) // não existe "new" por que estamos trabalhando com factory Functions
console.log(pessoa1)