
// Seleção dos elementos

const nomeProduto = document.querySelector('#produto')
const quantidadeProduto = document.querySelector('#quantidade')
const form = document.querySelector('#formulario')
const preco = document.querySelector('#preco')
const resul = document.querySelector('#resultado')
const produtos = []

form.addEventListener('submit', iniciar)
// fim da selecao dos elementos

// funcao principal
function iniciar(evento){
    evento.preventDefault()
    console.log('Tudo Preparado')

    const isValid = validarCampos()
    if(!isValid){
        return false
    };

    const guardarTotal = calcularTotal(
        Number(preco.value),
        Number(quantidadeProduto.value)
    )

     const produto = criaProdutos(
        nomeProduto.value,
        Number(preco.value),
        Number(quantidadeProduto.value),
        guardarTotal
     )
    produtos.push(produto)
    mostrarCarrinho(produto)
    limparTela()

}; // fim da funcao principal


// funcao calcularTotal
function calcularTotal (preco , quantidade){
    const total = preco * quantidade
    return total
}; // fim da funcao calcular


// funcao removerProduto
function removerProduto (nomeProduto){
    const produtoEncontrado = produtos.findIndex(produto => produto.nome === nomeProduto)

    if(produtoEncontrado === -1){
        console.log('Produto Não Encontrado \u{1F6AB}')
        return
    }
    produtos.splice(produtoEncontrado, 1)
    console.log(' Produto Removido com sucesso')
}; // Fim Da Funcao Remover Produto


// Funcao Validar Campos
function validarCampos(){
    const guardaQuantidade = Number(quantidadeProduto.value)
    const guardaPreco = Number(preco.value)
    if (nomeProduto.value.trim() === "" || Number.isNaN(guardaQuantidade) || guardaQuantidade <= 0 || Number.isNaN(guardaPreco) || guardaPreco <= 0){
        alert('\u{274C} Campos invalidos')
        return false
    }
    return true
}; // fim da funcao validar campos


// funcao mostrar carrinho na tela
function mostrarCarrinho(produto){
    resul.innerHTML = `
      Seu carrinho : <br>
      Produto : ${produto.nome}  <br>
      Preço do produto : ${produto.preco.toFixed(2)} R$ <br>
      Quantidade : ${produto.quantidade} <br>
      Total : ${produto.total.toFixed(2)} R$
    `
}; // fim da funcao mostrar carrinho

// funcao limparTela
function limparTela(){
    nomeProduto.value = ''
    preco.value = ''
    quantidadeProduto.value = ''
}; // fim da funcao limparTela
 


// funcao criaProdutos
function criaProdutos(nome, preco, quantidade, total){
    return{
        nome,
        preco,
        quantidade,
        total
    }
}; // fim da funcao criar produtos
