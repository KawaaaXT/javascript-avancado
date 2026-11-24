
const path = require('path')
const {Pessoa} = require('./mod1')
const axios = require('axios')


axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e)) 






/*
const {nome, sobreNome,falaNome} = require('./mod1')
console.log(nome)
console.log(sobreNome)
console.log(falaNome())



const mod1 = require('./mod1')
const falaNome2 = mod1.falaNome

console.log(falaNome())
*/