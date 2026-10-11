


const _velocidade = Symbol('velocidade')


class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0
    }


    set velocidade(valor) {
        console.log("Eu sou o Setter")
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor
        
    }


    get velocidade(){
        console.log("Eu sou o Getter")
        return this[_velocidade]

    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return ;
          this[_velocidade]--;
    }

}

const car = new Carro("Ferrari")
car.velocidade = 50 // utilizando o setter

console.log(car.velocidade) // utilizando  o getter

/*

class Pessoa  {
    constructor(nome, sobrenome){
        this.nome = nome;

        this.sobrenome = sobrenome;
    }


    
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto (valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join()
    }


}

const p1 = new Pessoa ("Kauã", "De Lima")
p1.nomeCompleto = "Eduarda De Lima Pereira" // Usando o setter

console.log(p1.nome) // usando o getter
console.log(p1.sobrenome) // usando o getter
*/