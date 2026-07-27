
// Seleção dos elementos 

const nameUsuario = document.querySelector('#nomeUsuario')
const nomeProduto = document.querySelector('#produto')
const valorProduto = document.querySelector('#precoProduto')
const form = document.querySelector('#formulario')
const resul = document.querySelector('#resultado')
const produtos = []
form.addEventListener('submit', enviar)
// fim da seleção

// function enviar
function enviar(evento){
    evento.preventDefault()
    console.log('Programa Iniciado')

    let validado = validarCampos()
    if(!validado){
        return 
    }

    
    let valorCompra = Number(valorProduto.value)
    const desconto = descontoProduto(valorCompra)
        
    
    let produto = criarProdutos(
        nameUsuario.value,
        nomeProduto.value,
        valorCompra,
        desconto
    )
    produtos.push(produto)
    mostrarResultado(produto)
    limparTela()

  

}; // fim da função enviar

// função validarCampos
function validarCampos (){
    let valorP = Number(valorProduto.value)
    if(nameUsuario.value.trim() === '' || nomeProduto.value.trim() === '' || valorP <= 0 || Number.isNaN(valorP)){
        alert(' \u{1F6A5} Preencha os campos corretamente ')
        return false
    }
    return true
}; // Fim Da funcao validarCampos

// inicio da funcao descontoProduto
function descontoProduto (valorProduto){
    let valordoDesconto = Number(valorProduto)
    const valorFinal = valordoDesconto >= 200 ? valordoDesconto * 0.90 : valordoDesconto // operador ternário
    let resultado = valordoDesconto >= 200 ? 'Sim' : 'Não' // operador ternário
    return{
        resultado,
        valorFinal
    }

}; // fim da funcao descontoProduto

// inicio da funcao criar Produtos
function criarProdutos (cliente , produto , preco, desconto){
    return{
        cliente,
        produto,
        preco,
        desconto
    };
}; // fim da função criar produtos

// inicio funcao limpar tela
function limparTela(){
    nameUsuario.value = ''
    nomeProduto.value = ''
    valorProduto.value = ''
}; // fim da funcao limpar tela

function mostrarResultado(produto){
    resul.innerHTML += `
    Seu Carrinho \u{1F6D2} <br>

    Cliente : ${produto.cliente} <br>
    Produto : ${produto.produto} <br>
    Desconto : ${produto.desconto.resultado} <br>
    Valor da Compra : ${produto.preco} R$ <br>
    Valor final :  ${produto.desconto.valorFinal} R$ 
    `
};