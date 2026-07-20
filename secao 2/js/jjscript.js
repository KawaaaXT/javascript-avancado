

// Seleção dos Elementos

const nome = document.querySelector('#seunome')
const primeiraNota = document.querySelector('#nota01')
const segundaNota = document.querySelector('#nota02')
const form = document.querySelector('#formulario')
const resultado = document.querySelector('#resul')
const alunos = []

form.addEventListener('submit', iniciar)

// Fim Da Selecão



// Função Principal

function iniciar(evento){
    
        evento.preventDefault()
        console.log('Tudo Ok')
       
       const situacao = validarCampos()
       
       if(!situacao){
        return 
       }
    
     const nota1 = Number(primeiraNota.value)
     const nota2 = Number(segundaNota.value)
      
     let media = (nota1 + nota2) / 2
       
       const novosAluno = criarAluno (
        nome.value,
        nota1,
        nota2,
        media,
        situacao
       ); // Fim Do Object Novos Alunos

       alunos.push(novosAluno)
       mostrarResultado(novosAluno)
       limparTela()
       console.log(alunos)
       

}; // Fim Da Função Principal



// Validação de campos
function validarCampos() {
    if(nome.value.trim() === ''){
        alert(' \u{1F6A8} Preencha os campos vazios para prosseguir. ')
        return false
    };
     
     const nota1 = Number(primeiraNota.value)
     const nota2 = Number(segundaNota.value)
      
     let media = (nota1 + nota2) / 2
     

     if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert(' \u{1F6A8} Nota Invalida! ')
        return false
    };

    if(isNaN(nota1) || isNaN(nota2)){
        alert(' \u{1F6A8} Digite uma nota valida ')
    }
    
    

    let situacao
    if(media >= 7){
        situacao = 'Parabéns Você foi Aprovado'
    }else if (media >= 5) {
        situacao = 'Quase... Você Esta em Recuperação'
    }else{
        situacao = 'Você esta Reprovado!'
    }

    return situacao
}; // Fim da Funcão Validação


// Resultado

function mostrarResultado (name){
    resultado.innerHTML = `
    <p>
       Seu nome é : ${name.nome}
      
    </p> <br>

    <p>
      Sua Primeira Nota: ${name.nota1}
    
    </p> <br>

    <p>
      Sua Segunda Nota: ${name.nota2}

    </p> <br>

    <p>
       A Sua média é: ${name.media}

    </p> <br>

    <p>
      A Sua situação: ${name.situacao}
    </p>
    `
};



// Função LimparTela

function limparTela(){
    
    nome.value = ''
    primeiraNota.value = ''
    segundaNota.value = ''
}; // Fim Da Função Limpar Tela


 
// Função Criar Alunos 

function criarAluno (nome, nota1, nota2, media, situacao){
    return{
    nome,
    nota1,
    nota2,
    media,
    situacao
    }
}; // Fim Da Função CriarAlunos



