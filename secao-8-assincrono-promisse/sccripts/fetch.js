

 // fetch('pessoas.json')
 // .then(resposta => resposta.json()) // me retorna uma nova promise
 // .then(json => carregaElemetnoNaPagina(json)); 

  axios('pessoas.json')
  .then(resposta => carregaElemetnoNaPagina(resposta.data))
 const carregaElemetnoNaPagina = (json) => {
    const table = document.createElement('table')

    for (let pessoa of json) {
        const tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = ` Nome:  ${pessoa.nome}`
        tr.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerHTML = ` Idade:  ${pessoa.idade}`
        tr.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerHTML = ` Salario:  ${pessoa.salario.toFixed(2)} R$`
        tr.appendChild(td3)

        table.appendChild(tr)


        console.log(pessoa.nome)
    }
    
    const resultado = document.querySelector('#resultado')
    resultado.appendChild(table)
 }

