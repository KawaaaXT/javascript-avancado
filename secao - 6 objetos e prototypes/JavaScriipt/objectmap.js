
const pessoas = [
    {id: 3, nome: "Kauã"},
    {id: 2, nome: "Luiza"},
    {id: 1, nome: "Roberta"}
]

const novasPessoas = new Map()

for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id,  {...pessoa} )
}

novasPessoas.delete(2)
console.log(novasPessoas)





/*
for (const [identifer, {id,nome}] of novasPessoas) {
    console.log(identifer, id, nome)
}

//desestrutaração de objects
for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas[id] = {...pessoa}

}
    */
