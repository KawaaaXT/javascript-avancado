const nomePessoa = document.querySelector('#txtname')
const sobreNome = document.querySelector('#txtsobre')
const peso = document.querySelector('#pesokg')
const altura = document.querySelector('#txaltura')
const enviar = document.querySelector('#envio')
const resul = document.querySelector('#resultado')
const form = document.querySelector('#formulario')
const pessoas = []

form.addEventListener('submit', enviou)


function enviou(evento){
     
    evento.preventDefault()
    console.log('Tudo OK')
    
    if (nomePessoa.value.trim() === ''){
        alert('Preencha Os Campos Obrigátorios.')
        return
    };
   

    const pessoa = criaPessoa (
    nomePessoa.value,
    sobreNome.value,
    Number(peso.value),
    Number(altura.value)
    );
    console.log(pessoas)

    

    pessoas.push(pessoa)
    nomePessoa.value = ''
    sobreNome.value = ''
    peso.value = ''
    altura.value = ''

    
    resul.innerHTML +=` 
      <p>
        Nome : ${pessoa.nome} 
      </p> <br>

      <p>
        Sobrenome: ${pessoa.sobrenome}
      </p> <br>

      <p>
        Peso: ${pessoa.peso} kg
      </p> <br>

      <p>
        Altura: ${pessoa.altura}
      </p>

    `
};

 function criaPessoa (nome , sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        peso,
        altura
    }
 };


