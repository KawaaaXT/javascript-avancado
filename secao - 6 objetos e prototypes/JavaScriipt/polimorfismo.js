

// SuperClass

function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if(valor > this.saldo) {
        console.log(`Saldo Insuficiente ${this.saldo} ): `)
        this.verSaldo()
        return
    }

    this.saldo -= valor

}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()

}

Conta.prototype.verSaldo = function () {
    console.log(`
        Agencia:  ${this.agencia}
        Conta : ${this.conta}
        Saldo $ : ${this.saldo.toFixed(2)}
        `)
}

function ContaCorrente (agencia, conta, saldo, limite) {
    Conta.call(this,agencia, conta, saldo)
    Object.defineProperty(this, 'limite', {
        value: limite,
        enumerable: true,
        writable: false,
        configurable: false
    })
}


ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
    if(valor > this.saldo + this.limite) {
        console.log(`Saldo Insuficiente ${this.saldo}R$`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
}


const cc = new ContaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)
console.log(cc)


function ContaPoupanca (agencia, conta, saldo) {
    Conta.call(this,agencia, conta, saldo)
}


ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const cp = new ContaPoupanca (11, 22, 0)
cp.depositar(10)
cp.sacar(110)
cp.sacar(1)


console.log(cp)