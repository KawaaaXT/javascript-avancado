



const pessoa = {
    nome: "Kauã",
    idade: 20,
    sobreNome: "Pereira",
    endereco: {
        cidade: "Porto",
        pais: "Portugal"
    } // fim
};
     //(Valor Padrão)
const {nome = "Ghost", sobreNome, idade} = pessoa 
                // alterando a variavel cidade para quebrada //
const {endereco: {cidade: quebrada , pais}, endereco} = pessoa // acessando os atributos dentro do object endereço !!

const {sobreNome: sobreName} = pessoa

const {nome: nomePessoa} = pessoa

console.log(
    `
    Seu Nome é : ${nomePessoa}  ${sobreName}
    Voce tem : ${idade} anos
    Você esta localizado em : ${quebrada}
    Morando em : ${pais}
    
    `
)




                 // alterando a variavel cidade para quebrada //
//const {endereco: {cidade: quebrada, pais}, endereco} = pessoa // acessando os atributos dentro do object endereço !!


/*
const pessoa = {
    nome: "Kauã",
    sobreNome: "Lima",
    idade: 20,
    endereco: {
        cidade: "Porto-Fanzeres",
        pais: "Portugal"
    } // fim 
};



const {nome, sobreNome, idade} = pessoa // atribuicção via desestruturação
const {endereco} = pessoa // atribuicção via desestruturação
const {idade: ano} = pessoa // mudar o nome da variavel

console.log(nome)
console.log(sobreNome)
console.log(ano)
console.log(endereco)
*/