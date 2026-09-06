



function criarCalculadora () {
    let operadorSelecionado
    let primeiroNumero
    let segundoNumero
       return{
           display: document.querySelector("#resultado"),

         somar(){
            const resultado = primeiroNumero + segundoNumero

            this.display.innerText = resultado
                   
         },

         subtrair (){
            const resultado = primeiroNumero - segundoNumero

            this.display.innerText = resultado

         },

         multiplicacao(){
           
            const resultado = primeiroNumero * segundoNumero

            this.display.innerText = resultado

         },

         divisao(){
            const resultado = primeiroNumero / segundoNumero

            this.display.innerText = resultado

         },


        cliqueBotoes(){
            document.addEventListener("click", e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)

                }

                if(el.classList.contains('operador') && !el.classList.contains('btn-igual')){
                    primeiroNumero = Number(this.display.innerText)
                    operadorSelecionado = el.innerText
                    this.display.innerText = "0"
                }

                if(el.classList.contains('btn-clean')){
                    this.display.innerText = ""
                    this.display.innerText = "0"

                }

                if(el.classList.contains('btn-igual')){
                     segundoNumero = Number(this.display.innerText) 
                     if (operadorSelecionado === "+"){
                        this.somar()
                     }else if(operadorSelecionado === "−"){
                        this.subtrair()

                     }else if(operadorSelecionado === "×") {
                        this.multiplicacao()

                     }else if(operadorSelecionado === "÷"){
                        this.divisao()
                     }

                }

                if(el.classList.contains('btn-virgula')){
                    this.btnParaDisplay(el.innerText)
                }
            })

        },

         btnParaDisplay(valor){
            

            if(this.display.innerText === "0"){
                this.display.innerText = valor
                return
            }

            this.display.innerText += valor.replace(",", ".")
         }

       };
         
    }

const calculadora = criarCalculadora()
calculadora.cliqueBotoes()



