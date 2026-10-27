

function aleatorio (min, max) {
    min *= 1000; // a variável min recebe o valor dela própria multiplicado por 1000.
    max *= 1000; // a variável max recebe o valor dela própria multiplicado por 1000.
    return Math.floor(Math.random() * (max - min) + min)
}



function esperaAi(msg, tempo) {
    return new Promise((resolve, rejecet) => {
        
    setTimeout(() => {
         if(typeof msg !== 'string') {
            rejecet('Damn Brother')
            return
        }
        resolve(msg.toUpperCase() )
    }, tempo)

    })
}

function baixaPagina() {
    let emCache = true

    if(emCache) {
        return Promise.reject('Pagina em Cache :)')
    }else {
        return esperaAi('Baixando a Pagina....',  aleatorio(1,5))
    }

}

async function executar () {
    try{
    const esperando = await esperaAi('Kauã', aleatorio(1, 3))
    console.log(esperando)

    const esperando2 = await esperaAi(2 , aleatorio(1, 3))
    console.log(esperando2)

    const esperando3 = await esperaAi('Lima', aleatorio(1, 3))
    console.log(esperando3)

    const esperando4 = await esperaAi('Pereira', aleatorio(1, 3))
    console.log(esperando4)
    } catch(e) {
        console.log('[ERROR]', e)
    }
    
    
}

executar()
