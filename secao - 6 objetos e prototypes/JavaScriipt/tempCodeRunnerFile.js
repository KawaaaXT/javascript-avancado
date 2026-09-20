

function Produto (nome, valor, quantidade) {
    this.nome = nome;

    this.valro = valor;

    this.quantidade = quantidade

    Object.defineProperty(this, 'valorEstoque', {
        get () {
            return this.valor * this.quantidade
        },
        enumerable: true,
        configurable: false
    })
};

const produto1 = new Produto ("Sapato nike", 1000, 2)

console.log(produto1.valorEstoque)

produto1.valor = 1200

console.log(produto1.valorEstoque)