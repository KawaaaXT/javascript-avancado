



// metodo: copiando uma propriedade de um objeto para outro objeto

/*
const produto = {nome: 'Camiseta', preco: 12}

const novoProduto = {
    ...produto,
    marca: "Nike",
    tamanho: "M"
}

novoProduto.nome = "Kauã"
novoProduto.preco = 15


console.log(produto)
console.log(novoProduto)




// Copiiando um objeto 
const produto = {nome: 'Camiseta', preco: 12}
const pessoa = {nome: "Kauã", idade: 21, profissao: "Eletricista"}

const nvProduto = Object.assign({}, produto, pessoa)

console.log(nvProduto)

*/
//const caneca = {material: "Porcelana", fabricado: "Germany"}

const produto = {nome: 'Caneca', preco: 12}
Object.defineProperty(produto, 'nome', { // alterando uma propriedade (chave)
    writable: false,
    configurable: false
})

//       desestruturação 
for (let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor)
}

