

const dados = [
    ["Kaua", "Programador"],
    ["Brasil", 2026],
    ["JavaScript", "Html", "CSS"]
]

const [[nome, profissao], [paisOrigem, anoAtual], [Script, html, css]] = dados

console.log (
    `
    Meu Nome é : ${nome}
    Minha Profissão é : ${profissao}
    Nasci no : ${paisOrigem}
    Nosso Ano Atual é : ${anoAtual}
    E Eu estudo : ${Script} , ${html} e  ${css}
    
    `
)





/*
const pessoas = [
    ['Kaua', 20],
    ['Ramon', 27],
    ['Daniel',21]
]

const [[nomePessoa1, idade1], [nomePessoa2, idade2], [nomePessoa3, idade3]] = pessoas

console.log(
    `
    Nome : ${nomePessoa1}
    idade : ${idade1}

    Nome: ${nomePessoa2}
    Idade: ${idade2}

    Nome: ${nomePessoa3}
    Idade: ${idade3}
    
    `
);

/*




/*
const letras = ['A', 'B', 'C', 'D', 'E']
const [primeiraLetra, ...restante] = letras
console.log(`
    Minha Primeira Letra : ${primeiraLetra}
    as restantes das letras : ${restante}
    
    `
);
*/




/*
const animais = ["Cachorro"]

const [primeiroAnimal, segundoAnimal = "Gato"] = animais

console.log (`
    Meu melhor amigo é o : ${primeiroAnimal}
    e também meu lindo : ${segundoAnimal}
    `
)
*/



/*const numeros = [10, 20, 30, 40]

const [primeiroNumero, , , quarenta] = numeros

console.log(primeiroNumero, quarenta)
*/





/*const cores = ["Azul", "Vermelho", "Rosa", "Verde"]
const [blue, red, pink, green] = cores

console.log(
    `
    Minha cor preferida é : ${blue}

    Minha segunda cor é : ${red}

    e a Terceira é : ${pink}

    e a ultima : ${green}
    `
);
*/
