
// Promises (Promessa)

function aleatorio (min, max) {
    min *= 1000; // a variável min recebe o valor dela própria multiplicado por 1000.
    max *= 1000; // a variável max recebe o valor dela própria multiplicado por 1000.
    return Math.floor(Math.random() * (max - min) + min)
}



function esperaAi(msg, tempo) {
    return new Promise((resolve, rejecet) => {
        if(typeof msg !== 'string') rejecet('Damn Brother')
    setTimeout(() => {
        console.log()
        resolve(msg)
    }, tempo)

    })
}

esperaAi('Conexao com o Banco De Dados', aleatorio(1, 3) )
.then(resposta => {
    console.log(resposta)
    return esperaAi('Buscando dados da base de dados', aleatorio(1, 3))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi(12312312312312312,  aleatorio(1, 3))
})
.then(resposta => {
    console.log(resposta)
})
.then(() => {
    console.log('Exibindo dados na tela....')
})
.catch(erro => {
    console.log('[ERRO]', erro)
})
