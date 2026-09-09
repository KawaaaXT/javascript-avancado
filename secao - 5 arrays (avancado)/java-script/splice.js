
// Splice

/*
const nomes = ["Lucas", "Renata", "Pedro","Deyvid"]

//        Inicio / Quantidade

const resul = nomes.splice(2,2, "Kauã", "Domingues" )

console.log(nomes, resul)




const tarefas = [

    'Estudar JavaScript',

    'Treinar',

    'Estudar & Pratica',

    'Ler Documentos',

    'Praticar com dom'

    ]



const removerTarefas = (indice) => {
    tarefas.splice(2, 2)
}
   

removerTarefas(2)
console.log(tarefas)



const produtos =  [
    'Teclado Mêcanico',

    'Rato Rezer Gaming',

    'Monitor Asus 4k',

    'Headset sem fio',

    'MousePad RGB'

]

const editarProduto = (indice) => {
    produtos.splice(indice,1, "Monitor Asus Curvado 4k")
    
  
}

editarProduto(2)
console.log(produtos)

*/



 

const produtos =  [
    'Teclado Mêcanico',

    'Rato Rezer Gaming',

    'Monitor Asus 4k',

    'Headset sem fio',

    'MousePad RGB'
]

const adicionarProduto = (indice1, indice2) => {

    produtos.splice(indice1,0, indice2)

}



adicionarProduto(2, "Notebook")
console.log(produtos)


