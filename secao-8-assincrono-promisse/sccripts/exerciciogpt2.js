
const buscarCliente = (id) => {
        return new Promise((resolve, reject) => {
            const clientes = [
           {
             id: 1,
             nome: 'Kauã',
             email: 'kaua@email.com'
          },
           {
             id: 2,
             nome: 'Maria',
             email: 'maria@email.com'
         },
          {
            id: 3,
            nome: 'João',
            email: 'joao@email.com'
       }
       ];
            
            if(typeof id !== 'number' || id <= 0) {
                reject('ERRO')
                return
            }

           const clientesEncontrado = clientes.find((cliente) =>  cliente.id === id)

           if(clientesEncontrado === undefined) {
            reject('ERRO')
            return
           }

           setTimeout(() => {
                    resolve(clientesEncontrado)
            }, 3000)

        })

        
        
}

const buscarPedidos = (idCliente) => {
    return new Promise((resolve, reject) => {
        const pedidos = [
            {id: 1, idCliente: 1, produto: 'Mouse', quantidades: 250, valor: 80},
            {id: 2, idCliente: 1, produto: 'Teclado', quantidades: 156, valor: 100},
            {id: 3, idCliente: 2,  produto: 'Secretaria', quantidades: 98, valor: 350},
            {id: 4, idCliente: 1, produto: 'HeadSet', quantidades: 290, valor: 65}
        ]

        if(typeof idCliente !== 'number' || idCliente <= 0) {
            reject('[ERROR]')
            return
        }
           

        const pedidosEncontrados = pedidos.filter((pedido) => pedido.idCliente === idCliente)

        if(pedidosEncontrados.length === 0) {
            reject('ERRO')
            return
        }

         setTimeout(() => {
                resolve(pedidosEncontrados)
            }, 3000)
    })
}

const carregarDadosCliente = () => {
    Promise.all([
        buscarCliente(1),
        buscarPedidos(1)
      
    ])
    .then((resultados) => {
        console.log(resultados[0])
        resultados[1].forEach((pedido) => {
            console.log(`PRODUTO: ${pedido.produto} - VALOR : ${pedido.valor} € - QUANTIDADES : ${pedido.quantidades}`)
        })

        const total = resultados[1].reduce((acumulador, pedido) => {
            return acumulador + pedido.valor
        }, 0)

        console.log(total)
        
    })
    .catch((erro) => {
        console.log(erro)
    })
    .finally(() => {
        console.log('Operação Finalizada')
    })
}

carregarDadosCliente()