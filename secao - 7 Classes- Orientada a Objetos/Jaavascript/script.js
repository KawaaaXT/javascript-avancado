
class DispostivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    };

    ligar(){
        if(this.ligado) {
            console.log(this.nome + ' Já Ligado ')
            return
        }

        this.ligado = true

    }

    desligar(){
        if(!this.ligado) {
            console.log(`${this.nome} Desligado...`)
            return
        }

        this.ligado = false
    }
}

class Smarthphone extends DispostivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispostivoEletronico {
    constructor(nome, temWifi){
        super(nome)
        this.temWifi = temWifi
    }

    ligar() {
        console.log("Alteramos o método ligar")
    }
}


const t1 = new Tablet ("IPAD", true)