
const form = document.querySelector('#formulario')
form.addEventListener('submit', iniciar)
const cadastro = []

function iniciar(evento){
    evento.preventDefault()
    console.log('Tudo OK')
    const product = document.querySelector('#produto')
    const preco = document.querySelector('#preco')
    const quantidade = document.querySelector('#quantidade')
    const resultado = document.querySelector('#resul')
    
    
    

    if (product.value.trim() === ""){
        alert('[ERROR] Preencha os campos vazios para poder continuar.')
        return
    }

    const guardando = criandoosProdutos (
        product.value,
        Number(preco.value),
        Number(quantidade.value)
    );
    cadastro.push(guardando)
    console.log(cadastro)

    let soma =  guardando.preco * guardando.quantidade
    let estoqueTotal = 0

    cadastro.forEach(function (produto) {
        estoqueTotal +=  produto.preco * produto.quantidade
        
    })
    console.log(estoqueTotal)



    product.value = ''
    preco.value =  ''
    quantidade.value = ''

    resultado.innerHTML = ` 
      <p> Nome Do Produto : ${guardando.produto} </p> <br>

      <p> Preço Do Produto : R$ ${guardando.preco} </p> <br>

      <p> Quantidade Do Produto: ${guardando.quantidade} </p> 

      <p> O Total Deu : ${soma}  </p>

     
    `
    }

    

   

function criandoosProdutos(produto, preco, quantidade){
    return{
        produto,
        preco,
        quantidade
    }

}
