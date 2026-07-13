const nome = prompt('Digite Seu Nome Completo')
const total = nome.length
const segL = nome[1]
const primeiroInd = nome.indexOf("a")
const ultimoInd = nome.lastIndexOf("a")
const ultimaTresl = nome.slice(-3)
const palavras = nome.split(" ")
const maius = nome.toUpperCase()
const minus = nome.toLowerCase()


document.body.innerHTML = ` O seu nome é : <strong>${nome}</strong> <br> `
document.body.innerHTML +=  ` Seu Nome Tem o total de : ${total}  Caracteres. <br> `
document.body.innerHTML += ` A Segunda Letra Do Seu Nome é : ${segL} <br>  `
document.body.innerHTML += ` Qual é o primeiro indice da letra "A" do seu nome : ${primeiroInd} <br>`
document.body.innerHTML += ` Qual é o ultimo indice da letra do seu nome : ${ultimoInd} <br>`
document.body.innerHTML += ` As Ultimas 3 Letras do seu nome são :  ${ultimaTresl} <br> `
document.body.innerHTML += ` As Palavras do seu nome são :   ${palavras} <br> `
document.body.innerHTML += ` Seu Nome Com todas as letras maiusculas:  <strong>${maius}</strong><br>  `
document.body.innerHTML += ` Seu Nome Com todas as letras minusculas:  <strong>${minus}</strong>`


