

document.addEventListener('click', (e) => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(elemento)
    }

})

const carregaPagina = async (elemento) => {
   try{
     const href = elemento.getAttribute('href') // LINK

    const response = await fetch(href)
    if(response.status !== 200) throw new Error('[ERROR] 404 ')

    const html = await response.text()
    carregaResultado(html)

   }catch(erro) {
    console.log(erro)

   }
       
}

const carregaResultado = (response) => {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = response

  }


