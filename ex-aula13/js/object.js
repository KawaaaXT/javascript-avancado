
               //(Gustavo)  //(Luiz)   //(20)
function criaPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade

    }
}; // função factory (ela cria (retorna), objetos)

const pessoa1 = criaPessoa('Gustavo', 'Luiz', 20)
const pessoa2 = criaPessoa('Ramon', 'Santos', 22)
const pessoa3 = criaPessoa('Kauã', 'Pereira', 19)

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)

console.log(pessoa3.nome)
console.log(pessoa3.sobrenome)
console.log(pessoa3.idade)


//const pessoa = {
  //  nome: "Kauã" ,
    //sobrenome: "De Lima",
    //idade: 20,
    //altura: 1.69,
    //peso: 73.00,

    // falar(){ // metodo : funcão 
        //console.log(` Olá meu nome é ${this.nome} e tenho ${this.idade} anos  a minha altura atual é ${this.altura} e o meu peso atual é ${this.peso} `)
    //},

    // incrementaIdade (){
         // this.idade++
    //}

// } // fim objeto

//console.log(pessoa.nome)
//console.log(pessoa.sobrenome)
//console.log(pessoa.idade)
//console.log(pessoa.altura)
//console.log(pessoa.peso)

//pessoa.falar()
// pessoa.incrementaIdade()