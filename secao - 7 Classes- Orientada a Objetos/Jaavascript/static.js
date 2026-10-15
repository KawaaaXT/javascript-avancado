
class ControleRemoto{
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
   // Método De Instância
    aumentarVolume() {
            this.volume += 1
    }
   // Método De Instância
    diminuirVolume() {
            this.volume -= 1
        }

    // Método de Estatico
    static trocarPilha() {
        console.log('Trocando Pilha...')

    }
    }
   

   


   
   

   


const controle = new ControleRemoto ('Samsung') // Controle é instância da minha classe ControleRemoto (Filho)

controle.aumentarVolume() // Método De Instancia .
controle.aumentarVolume()   // Método De Instancia .
ControleRemoto.trocarPilha() // Método Referente a Class .
console.log(controle)

