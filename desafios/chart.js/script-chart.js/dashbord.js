

const graficoVendas = document.getElementById('grafico-vendas')
const graficoDistribuicao = document.getElementById('grafico-distribuicao')
const totalVendas = document.querySelector("#total-vendas")
const melhorMes = document.querySelector("#melhor-mes")
const numeroDeMeses = document.querySelector("#numero-meses")
const vendas = [
    { mes: "Janeiro", valor: 1200 },
    { mes: "Fevereiro", valor: 1900 },
    { mes: "Março", valor: 1500 },
    { mes: "Abril", valor: 2400 },
    { mes: "Maio", valor: 2100 },
    { mes: "Junho", valor: 3000 }
]

class Dashbord {
    constructor(vendas) {
        this.vendas = vendas
    }

    totalDeVendas () {
        return this.vendas.reduce((acumulador, valor) => {
            return acumulador + valor.valor
        }, 0)
    }

    bestMonth () {
        let maiorValor = 0
        let nomeMes 
         this.vendas.forEach(venda => {
            if(venda.valor > maiorValor) {
                maiorValor = venda.valor
                nomeMes = venda.mes
            }
        })
        return nomeMes
    }

    numeroDeMonths () {
        return this.vendas.length
    }

    
}

const dashbord = new Dashbord (vendas) // Instância da minha class Dashbord e passei vendas , pois vendas é o meu array que contem o meu objeto
const formatadorMoeda = new Intl.NumberFormat("pt-PT", { // Formatando Moeda
    style: "currency",
    currency: "EUR"
})
totalVendas.innerText = formatadorMoeda.format(dashbord.totalDeVendas())
melhorMes.innerText = dashbord.bestMonth()
numeroDeMeses.innerText = dashbord.numeroDeMonths()


new Chart(graficoVendas, { // Grafico De Barras
    type: 'bar',
    data:{
        labels: vendas.map(venda => venda.mes),
        datasets: [{
            label: 'Vendas Mensais (€)',
            data: vendas.map(venda => venda.valor),
            backgroundColor: [
                'rgb(0, 123, 255)', // Janeiro
                'rgb(8, 201, 226)', // Fevereiro
                'rgb(3, 181, 160)', // Março
                'rgb(0, 214, 121)',// Abril
                'rgb(218, 1, 45)', // Maio
                'rgb(209, 164, 0)' // Junho
            ],
            borderColor: [
                'rgb(0, 123, 255)', // Janeiro
                'rgb(8, 201, 226)', // Fevereiro
                'rgb(3, 181, 160)', // Março
                'rgb(0, 214, 121)',// Abril
                'rgb(218, 1, 45)', // Maio
                'rgb(209, 164, 0)' // Junho
            ],
            borderWidth: 2,
            hoverBackgroundColor: [
                'rgb(0, 123, 255)', // Janeiro
                'rgb(8, 201, 226)', // Fevereiro
                'rgb(3, 181, 160)', // Março
                'rgb(0, 214, 121)',// Abril
                'rgb(218, 1, 45)', // Maio
                'rgb(209, 164, 0)' // Junho
            ], // cor das barras quando passar o rato por cima.
            categoryPercentage: 0.8,
            barPercentage: 0.5
        }]
    }, // fim data

    options: {
        responsive: true, // gráfico adapta-se à div
        maintainAspectRatio: false, // usa a altura definida pela div
        scales: {
            y: {
                beginAtZero: true, // meu eixo y ira comecar no 0
            }

        },
        plugins:{
            title: {
                display: true,
                text: 'Monthly Sales'
            },
            legend:{
                position: 'top',
                labels:{
                    color: 'black',
                    font:{
                        size: 14
                    }
                }

            }
        }
    } // Fim Options
})

new Chart(graficoDistribuicao, {
    type: 'doughnut', // Grafico De Rosca
    data: {
        labels: vendas.map(venda => venda.mes),
        datasets: [{
            label: 'Sales by Month (€)',
            data: vendas.map(venda => venda.valor),
            backgroundColor: [
                'rgb(0, 123, 255)', // Janeiro
                'rgb(8, 201, 226)', // Fevereiro
                'rgb(3, 181, 160)', // Março
                'rgb(0, 214, 121)',// Abril
                'rgb(218, 1, 45)', // Maio
                'rgb(209, 164, 0)' // Junho
            ],
            borderColor: '#ffffff',
            borderWidth: 3,
            borderRadius: 5 ,
            hoverOffset: 20
        }]
    }, // fim do data

    options: {
        cutout: '60%',
        responsive: true,
        maintainAspectRatio: false,
        circumference: 360,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales Distribution '
            },

            legend: {
                position: 'bottom',
                labels: {
                    color: 'black',
                    font: {
                        size: 12
                    }
                }
            }
            
            
        }
    }
})