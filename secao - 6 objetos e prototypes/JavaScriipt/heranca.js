
function Produto (nome, preco) {
    this.nome = nome;

    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta (nome, preco, color) {
    Produto.call(this, nome, preco);
    this.color = color;
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
Camiseta.prototype.aumento = function (porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100))
}

const produto = new Produto ("Teclado Mecanico", 80.90)
const camiseta = new Camiseta("Nike", 25, "BLUE")



function Caneca (nome, preco, material, estoque) {
  Produto.call(this, nome, preco)
  this.material = material;

  Object.defineProperty(this, 'estoque', {
     enumerable: true,
     configurable: false,

    get: function () {
        return estoque;
    },

    set: function(valor) {
        if(typeof valor !== 'number'){
            return 
        }
        estoque = valor

    }

  })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca ("Future Dev", 15.60, "Porcelana", 2)

console.log(caneca)
console.log(camiseta)
console.log(produto)