
// Sistema de Estoque 

// Cadastro de Usuarios

// Produto com propriedade Calculada

/*
function Estoque (nome, valor, estoque) {
    this.nome = nome;

    this.valor = valor ;

    Object.defineProperty(this, 'estoque', {
        value:  estoque,  // Valor Da Propriedade
        writable : true, // pode alterar o valor ?
        enumerable: true, // vai aparecer na enumeração ?
        configurable: false // pode apagar ou reconfigurar ?
    })
}

const produto = new Estoque ("Camisa", 40, 4)
produto.estoque = 8

delete produto.estoque


console.log(produto)

function Funcionario (nome, cargo, salario, id) {
    Object.defineProperties(this, {
        nome: {
            value: nome,  // Valor Da Propriedade
            writable: true,  // pode alterar o valor ?
            enumerable: true, // vai aparecer na enumeração ?
            configurable: true  // pode apagar ou reconfigurar ?
        },

        cargo: {
            value: cargo, // Valor Da Propriedade
            writable: true, // pode alterar o valor ?
            enumerable: true,  // vai aparecer na enumeração ?
            configurable: true // pode apagar ou reconfigurar ?
        },

        salario: {
            value: salario, // Valor Da Propriedade
            writable: true, // pode alterar o valor ?
            enumerable: true, // vai aparecer na enumeração ?
            configurable: false // pode apagar ou reconfigurar ?
        }, 

        id: {
            value: id, // Valor Da Propriedade
            writable: false, // pode alterar o valor ?
            enumerable: false, // vai aparecer na enumeração ?
            configurable: false // pode apagar ou reconfigurar ?
        }

      })
};

const funcionario1 = new Funcionario("Kauã", "Eletricista", 1100, 2026)
funcionario1.nome = 'Pedro'
funcionario1.salario = 1500
funcionario1.id = 2028
delete funcionario1.salario
delete funcionario1.id

console.log(funcionario1)

*/

 // Functionn Construtora 
function Produto (nome, valor, quantidade) {
    this.nome = nome;

    this.valor = valor;

    this.quantidade = quantidade

    Object.defineProperty(this, 'valorEstoque', {
        get () {
            return this.valor * this.quantidade
        },
        enumerable: true, // vai aparecer na enumeração ?
        configurable: false // pode apagar ou reconfigurar ?
    })
};

const produto1 = new Produto ("Sapato nike", 1000, 2)

console.log(produto1.valorEstoque)

produto1.valor = 1200

console.log(produto1.valorEstoque)