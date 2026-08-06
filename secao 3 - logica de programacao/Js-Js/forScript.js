

const conteiner = document.querySelector('#content')
const div = document.createElement('div')

const elementos = [
    {tag: 'h1', texto: 'Frase 01'},
    {tag: 'h2', texto: "Frase 02" },
    {tag: 'h3', texto: "Frase 03"},
    {tag: 'h4', texto: "Frase 04"}
];

for (let i = 0 ; i < elementos.length ; i++){
    const {tag, texto} = elementos[i] // atribuicao via desestruturaçaõ
    const hs = document.createElement(tag)
    hs.innerText = texto
    div.appendChild(hs)
}

conteiner.appendChild(div)