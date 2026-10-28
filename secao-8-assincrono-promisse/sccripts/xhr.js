// requisição ajax




const request = (obj) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(obj.method, obj.url, true);

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });

        xhr.addEventListener('error', () => {
            reject('Erro de conexão.');
        });

        xhr.send();
    });
}
 
document.addEventListener('click', (e) => {
    const elemento = e.target
    const tag = elemento.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(elemento)
    }

})

const carregaPagina = async (elemento) => {
    const href = elemento.getAttribute('href')
    console.log(href)

    const objConfigurado = {
         method: 'GET',
          url: href
    }
     try { 
        const response = await request(objConfigurado)
          carregaResultado(response)

    }catch(error)  {
        console.log(error)
    }
   }

const carregaResultado = (response) => {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = response

  }


