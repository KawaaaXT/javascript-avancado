


const idUsuario = document.querySelector('#idUsuario')
const formulario = document.querySelector('#formulario')
const nome = document.querySelector('#nome')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')

const request = (obj) => {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(obj.method, obj.url,  true)

        xhr.setRequestHeader('Accept', 'application/json')

        xhr.addEventListener('load', () => {
            console.log(xhr.status, 'SOU O XHR STATUS')
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText) // Recebendo a resposta

            }else {
                reject(xhr.statusText) // 
            } 
            })

        xhr.addEventListener('error', () => {
            console.log('Falha na requisição', xhr.status)
            reject('Error De Conexão')

        })

        

        xhr.send()
    })

}

formulario.addEventListener('submit', (e) => {
     e.preventDefault()
     console.log(e.target)
     limparUsuario()
     pesquisarUsuario()
     
})

const obterId = (idUsuario) => {
    
    const id = Number(idUsuario.value)
    
        if(id === 0 || id < 0) {
            throw new Error('Numero Não Valido')
        }

        if(Number.isNaN(id)) {
            throw new Error('O ID deve ser um número válido.')
        }

        if(id > 10 ) {
            throw new Error('Só é permitido do 1 a 10 !')
        }

        if(!Number.isInteger(id)) {
            throw new Error('Só é permitido numeros inteiros')
        }
        console.log(id)

        return id
    }

const objetoConfigurado = (idUsuario) => {
    const url = `https://jsonplaceholder.typicode.com/users/${idUsuario}`
    const objConfigurado = {
        method: 'GET',
        url: url
    }
    return objConfigurado
}

const pesquisarUsuario = async () => {
    try{
      const id =  obterId(idUsuario)
       const obj =  objetoConfigurado(id)
        const resultado = await request(obj)
        const usuario = JSON.parse(resultado)
        mostrarUsuario(usuario)

    }catch(erro) {
        console.log(erro.message || erro)
    }
}

const mostrarUsuario = (usuario) => {
    nome.innerText = usuario.name
    userName.innerText = usuario.username
    email.innerText = usuario.email
    telefone.innerText = usuario.phone
}

const limparUsuario = () => {
    nome.innerText = ''
    userName.innerText = ''
    email.innerText = ''
    telefone.innerText = ''
}