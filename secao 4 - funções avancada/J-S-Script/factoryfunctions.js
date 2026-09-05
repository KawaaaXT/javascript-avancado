

// Factory Function (Função Fabrica)
function criaPessoa (nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,

        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`

        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)

        },


        // método
        falar: function (assunto) {
            return `${this.nome} ${this.sobrenome} ${assunto}`
        },

        peso: peso,
        altura: altura,

        // método
       get  imc() {
            const pesoImc = this.peso /  (this.altura ** 2)
            return pesoImc.toFixed(2)
        }
        
       
    }
}

const pessoa1 = criaPessoa("Kauã", "De Lima", 70, 1.69);
const pessoa2 = criaPessoa("Jamile", "Lopes", 55, 1.64)
pessoa1.nomeCompleto = "Deyvid Ferreira Da Silva Pinto"


console.log(pessoa1.nomeCompleto)

console.log(pessoa1.falar("Olá Mundo"));

console.log(pessoa1.imc)

console.log(pessoa2.falar("Oi Jamile"))

console.log(pessoa2.imc)
