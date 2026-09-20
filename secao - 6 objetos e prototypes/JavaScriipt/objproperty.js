
/*
function Produto (nome, valor, estoque) {
    this.nome = nome;

    this.valor = valor;

//                             (Propriedade)
    Object.defineProperty(this, 'estoque' , {  // Object.defineProperty => serve para criar ou modificar UMA propriedade de um objeto
      writable: false , // pode alterar o valor?
      value: estoque, // valor da propriedade
      enumerable: true , // aparece na enumeração?
      configurable: false // pode apagar/reconfigurar?
    });
}

const produto1 = new Produto('Cadeira Gaming ALPHA', 240, 10)
const produto2 = new Produto ('MousePad Gaming RGB', 35, 5)
const produto3 = new Produto (' Monitor ASUS Gaming', 250, 2)

console.log(Object.keys(produto1))

for (let chave in produto1) {
    console.log(chave)
}
    


function Produto (nome, valor, estoque) {
    Object.defineProperties(this, {
        nome: {
            value: nome, // Valor Da Propriedade
            writable: false, // pode alterar o valor ?
            enumerable: true, // vai aparecer na enumeração ?
            configurable: false // pode apagar ou reconfigurar ?
        },

        valor: {
            value: valor,
            writable: false,
            enumerable: true,
            configurable: false
        },

        estoque: {
            value: estoque,
            writable: false,
            enumerable: true,
            configurable: false
        }
    })
}

const produto1 = new Produto ("Iphone 17", 1500,  4)

console.log(produto1)




function Produto (nome, valor, quantidade){
    this.nome = nome;

    this.valor = valor;

    this.quantidade = quantidade

    Object.defineProperty(this, 'valorEstoque', {
        get () {
            return this.valor * this.quantidade
        },
        enumerable: true,
        configurable: true
    })
};

const produto1 = new Produto('Sapato', 150, 6)

console.log(produto1.valorEstoque)




function Produto (nome, preco, estoque){
    this.nome = nome;

    this.preco = preco;

    let estoquePrivado = estoque

   

    Object.defineProperty(this, 'estoque', {

        get () {
            return estoquePrivado
        }, 

        set(valor) {
            if (typeof valor !== 'number') {
                console.log("Damn [ERRO]")
                return
            }
            estoquePrivado = valor

        }
  
    })

}

const produto1 = new Produto ('Camisa', 15, 3)

produto1.estoque = 9
console.log(produto1.estoque)

*/


function criarPoduto (nome) {
    return{
        get nome() {
            return nome;
        },

        set nome(valor) {
            valor  = valor.replace('Coisa', '')
            nome = valor
        }
    }
}

const produto1 = criarPoduto('Telefone')

produto1.nome = "Qualquer Coisa"

console.log(produto1.nome)