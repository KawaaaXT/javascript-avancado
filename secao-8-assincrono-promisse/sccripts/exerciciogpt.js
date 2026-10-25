


function buscarUsuario (nome, id)  {
    return new Promise((resolve, reject) => {
        const pessoa = {
            nome: nome,
            id: id
        }

        if(typeof nome !== 'string' || typeof id !== 'number'){
            reject('[ERRO]')
            return
        }
        setTimeout(() => {
            resolve(pessoa)
        }, 2000)
    })
}


function buscarCompras() {
    const compras = [
    'Teclado',
    'Mouse',
    'Monitor'
  ]

  return new Promise((resolve, reject) => {
   

     if(compras.length === 0) {
        reject('Nenhuma Compra Encontrada' )
        return
    }else {
        setTimeout(() => {
           resolve(compras)
       }, 2000)
    }

  })
   
}


const promessaUsuario = buscarUsuario('Kauã', 1)

const promessaCompras = buscarCompras()

Promise.all([promessaUsuario, promessaCompras])
.then((resultado) => {
    console.log(resultado)
})
.catch((erro) => {
    console.log(` [ERRO] ${erro}`)
})
.finally(() => {
    console.log('Operação Finalizad')
})
















/*
function buscarUsuario (msg, nome) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string' || typeof nome !== 'string')  {
            reject('[ERRO]')
            return
        }

        setTimeout(() => {
            console.log(`Usuario ${nome} encontrado :)`)
            resolve(msg)
        }, 2000)
    })
}


buscarUsuario('Olá !', 'Kauã')
.then((resposta) => {
    console.log(resposta)
    return buscarUsuario(1221122112, 'Kauã')
})
.catch((erro) => {
    console.log(erro)
})
.finally(() => {
    console.log('Operação Finalizada')
})

*/