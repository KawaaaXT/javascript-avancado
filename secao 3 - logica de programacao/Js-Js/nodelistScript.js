
const paragrafos = document.querySelector('.paragrafos')
const todoParagrafos = paragrafos.querySelectorAll('p')
const estiloBody = getComputedStyle(document.body)
const backgroundBody = estiloBody.backgroundColor

for (let p of todoParagrafos){
    p.style.backgroundColor = backgroundBody
    p.style.color = '#FFFFFF';
}