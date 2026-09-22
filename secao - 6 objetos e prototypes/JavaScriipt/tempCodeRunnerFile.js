
const produtoBase = {
    categoria: "Informatica",
    disponivel: true
}

const dadosProduto = {
    nome: "Teclado",
    preco: 80,
    quantidade: 5
}


const produtoCompleto = Object.assign({}, produtoBase, dadosProduto )
const  {nome, preco, quantidade, ...outrosDados} = produtoCompleto
let total = preco * quantidade

console.log(nome)
console.log(preco)
console.log(quantidade)
console.log(total)
console.log(outrosDados)
console.log(Object.getOwnPropertyDescriptor(produtoCompleto, 'preco'))