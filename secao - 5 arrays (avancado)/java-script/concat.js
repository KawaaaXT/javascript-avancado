

/*
const nome1 = ["Kaua", "Clara"]
const nome2 = ["Pedro", "Lucas", "Deyvid", "José"]

const nomes = nome1.concat(...nome1, ...nome2, ...[1,2,3], "Deus eu te amo ")

console.log(nomes)


const frutas1 = ['Banana', 'Maça', 'Pêra']
const frutas2 = ['Uva', 'Manga', 'Laranja']

const outrasFrutas = frutas1.concat( ...frutas2)
console.log(outrasFrutas)
*/

const frontEnd = ["HTML", "CSS", "JavaScript"]
const linguagem = ["JavScript", "TypeScript"]
const beckEnd = ["Node.js", "Express"]

const juntarTecnlogias = () => {
    const retorno = frontEnd.concat(linguagem, beckEnd)
    return retorno
}

const tecnologias = juntarTecnlogias()

console.log(tecnologias)
    
