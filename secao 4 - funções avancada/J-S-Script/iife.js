
//Funções Imediatas (IIFE) =  Immediately Invoked Function Expression


(function (idade, peso, altura) {
    const sobrenome = "Lima Pereira"
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falarNome () {
        console.log(criaNome("Kauã"))
    }

    falarNome()
    console.log(idade, peso, altura)

})(21, 72, 1.69)