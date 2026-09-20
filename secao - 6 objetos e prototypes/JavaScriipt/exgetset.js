

/*
function Produto (nome, preco) {
    this.nome = nome;

    this._preco = preco;

    Object.defineProperty(this, 'preco', {
        get () {
            return this._preco
        },

        set(valor){
            if(valor <= 0){
                console.log("Numero Invalido")
                return
            }

             this._preco = valor
        }, // Fim SET

        

    }) // Fim object.define
    

}; // fim Funcao Construtora Produto


const produto1 = new Produto ('Teclado', 80)

console.log(produto1.preco)

produto1.preco = 120;

console.log(produto1.preco)

produto1.preco = -50;

console.log(produto1.preco)


function Funcionario (nome, salario) {
    this._salario = salario

    Object.defineProperties(this, {
        nome: {
            value : nome,
            writable: true,
            configurable: true
        },

        salario: {
            get () {
            return this._salario
        },

         set (valor) {
           if(valor >= this._salario) {
             this._salario = valor
            }
        }
    
      }
    })

}

const funcionario1 = new Funcionario ('Kauã', 1100)
funcionario1.salario = 1500
console.log(funcionario1.salario)

funcionario1.salario = 900

console.log(funcionario1.salario)

*/



function Produto (nome, preco, quantidade) {
    
    this._preco = preco;

    this._quantidade = quantidade

    Object.defineProperties(this, {
        nome: {
            value: nome,
            writable: true,
            enumerable: true,
            configurable: false
        },

        preco: {
            get () {
                return this._preco
            },

            set(valor) {
           valor >= 0 ? this._preco = valor : "Preço Invalido"
            return

            }
        },// fim Preco


        quantidade: {
            get () {
                return this._quantidade
            }, // fim get

            set (valor){
                 valor >= 0 ? this._quantidade = valor : "Quantidade Invalida"
                return

            }// fim set
        }, // fim quantidade

        total: {
            get () {
                return this._preco * this._quantidade
            }
        }
    })

}

const produto1 = new Produto ('Teclado', 200, 2)
console.log(produto1.nome)
console.log(produto1.preco)
console.log(produto1.quantidade)
console.log(produto1.total)

produto1.preco = 250
console.log(produto1.total)

produto1.preco = 4
console.log(produto1.total)

produto1.preco = -100
produto1.quantidade = -5

console.log(produto1.total)

        

    


        

    



