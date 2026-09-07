
// Função CallBack
function executar (tarefa) {
    console.log("Testando 123")
    tarefa();
}

function dizerOla (){
    console.log("Olá")

}

executar(dizerOla)