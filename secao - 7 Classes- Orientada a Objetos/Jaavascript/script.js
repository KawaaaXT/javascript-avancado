


class Funcionario {
    constructor(nome,idade,salario){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }

    falar(){
       console.log(`
        Meu Nome é :${this.nome}
        Tenho ${this.idade} Anos
         Meu Salario com aumento: ${this.salario} R$
        `)
    }

    aumentoSalario(porcentagem){
       return this.salario += this.salario * (porcentagem / 100)
    }

    maiorSalario(){
        if(this.salario > 3000){
            console.log("Salario Valido")
            return true
        }else{
            console.log("Salário Invalido")
            return false
        }
    }
}

const official1 = new Funcionario("Kauã", 21, 3000)
official1.aumentoSalario(5)
official1.falar()
official1.maiorSalario()
console.log(official1)



class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque
    }

    adicionarEstoque(quantidade){
       return this.estoque += quantidade
    }

     removerEstoque(quantidade){
        if(quantidade < this.estoque){
            this.estoque -= quantidade
            return true
        }else{
            console.log("Estoque Insuficiente")
        }
        
    }

    mostrarInfor(){
        console.log(`
            Méu Nome é ${this.nome}
            O Preço é ${this.preco}
            Estoque ${this.estoque}
            `)
    }

    set alterarPreco(preco){
        if(preco === 0 || preco < 0){
            console.log("Preço Invalido")
        }else{
            this.preco = preco
        }
    }

    verificarDisponibilidade() {
        if(this.estoque > 0){
            console.log("Produto Disponivel")
            return true
        }else {
            console.log("Produto Indisponivel")
            return false
        }
    }
}

const produto1 = new Produto("Capa de chuva", 15, 10)
produto1.removerEstoque(3)
produto1.adicionarEstoque(5)
produto1.alterarPreco = 25
produto1.verificarDisponibilidade()
console.log(produto1)


*/
class ContaBancaria {
    constructor(titular,saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(deposito) {
        if(deposito === 0 || deposito < 0) {
            console.log("Deposito Invalido")
            return
        }
        return this.saldo += deposito
    }

    sacar(valor) { // valor se refere ao saldo !
        if(valor === 0 || valor < 0){
            console.log("Saldo Insuficiente")
            return
        }

        if(valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.")
            return
        }

            this.saldo -= valor // Operação
       

    }

    verDados() {
        console.log(`${this.titular} / ${this.saldo}R$`)
    }
}

const conta = new ContaBancaria("Kauã", 0) // Instância de ContaBancaria (filho )
const conta2 = new ContaBancaria("Maria", 0) // Instância de ContaBancaria (filho)

conta.depositar(10)
conta2.depositar(20)
conta2.sacar(20)
conta.verDados()
conta2.verDados()
console.log(conta)
console.log(conta2)

*/