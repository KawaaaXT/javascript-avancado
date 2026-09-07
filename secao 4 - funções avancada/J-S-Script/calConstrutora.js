
// Exercicio Funcao Construtora + DOM

function Calculadora (numero1, numero2, operador){
    this.display = document.querySelector("#resultado")
    this.numero1 = numero1;
    this.numero2 = numero2;
    this.operador = operador;
    
    // Inicio Método Somar
    this.somar = () => {
        const resultado = this.numero1 + this.numero2;
        this.display.innerText = resultado
        
    }// Fim Método Somar
     
    // Inicio Método Subtração
    this.subtracao = () => {
        const resultado = this.numero1 - this.numero2;
        this.display.innerText = resultado

    }//  Fim Método Subtração
     
    // Inicio Método Multiplicacao
    this.multiplicacao = () => {
        const resultado = this.numero1 * this.numero2
        this.display.innerText = resultado

    }// Fim Método Multiplicação

    // Inicio Método Divisao
    this.divisao = () => {
        const resultado = this.numero1 / this.numero2
        this.display.innerText = resultado

    } // Fim Método Divisão


    // Inicio Método Porcentagem
    this.porcentagem = () => {
        const resultado = this.numero1 * this.numero2 / 100
        this.display.innerText = resultado

    } // Fim Método Porcentagem


    // inicio Método
    this.cliqueBotoes = () => {
        document.addEventListener("click", (e) => {
            e.preventDefault()
            console.log("Iniciando....")
            const elemento = e.target
           

            if(elemento.classList.contains('btn-num')){
                this.textDisplay(elemento.innerText)
            }

            if(elemento.classList.contains('btn-virgula')){
                this.textDisplay(elemento.innerText)
            }

            if (elemento.classList.contains('operador') && !elemento.classList.contains('btn-igual')){
                this.numero1 = Number(this.display.innerText)
                this.operador = elemento.innerText
                this.display.innerText = "0"
            }

            if(elemento.classList.contains('btn-igual')){
                this.numero2 = Number(this.display.innerText)
                if(this.operador === "+"){
                    this.somar()
                }else if(this.operador === "−"){
                    this.subtracao()
                }else if(this.operador === "×"){
                    this.multiplicacao()
                }else if(this.operador === "÷"){
                    this.divisao()
                }else if(this.operador === "%"){
                    this.porcentagem()
                }
            }

            
            if(elemento.classList.contains('btn-clean')){
                this.display.innerText = ""
                this.display.innerText = "0"
            }

        } ) // Fim AddEventListener

    } // Fim Método Clique Botões


       // inicio Método
      this.textDisplay = (elemento)  => {
        
        if(this.display.innerText === "0"){
            this.display.innerText = elemento
        }else{
            this.display.innerText += elemento.replace(",", ".")
        }
        } // Fim TexTDisplay


    }; // Fim Function Construtora

const calculadora = new Calculadora()
calculadora.cliqueBotoes()

   



