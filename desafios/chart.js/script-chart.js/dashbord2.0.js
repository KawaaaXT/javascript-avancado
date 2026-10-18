
const graficoBar = document.getElementById('grafico-barra')
const graficoLinha = document.getElementById('grafico-linha')
const graficoRosca = document.getElementById('grafico-rosca')
const graficoRadar = document.getElementById('grafico-radar')
const receitaTotal = document.getElementById('receita-total')
const totalEletronicos = document.getElementById('total-eletronicos')
const totalCasa = document.getElementById('total-casa')
const totalModa = document.getElementById('total-moda')
const totalOutros = document.getElementById('total-outros')

const vendaPorMes = [
    {mes: 'Jan', receita: 1600, pedidos: 35},
    {mes: 'Fev', receita: 2300, pedidos: 54},
    {mes: 'Mar', receita: 3400, pedidos: 64},
    {mes: 'Abr', receita: 4500, pedidos: 70},
    {mes: 'Mai', receita: 6000, pedidos: 120},
    {mes: 'Jun', receita: 5500, pedidos: 113},
    {mes: 'Jul', receita: 2100, pedidos: 46},
    {mes: 'Ago', receita: 1900, pedidos: 42},
    {mes: 'Set', receita: 1100,pedidos: 26},
    {mes: 'Out', receita: 4000, pedidos: 63},
    {mes: 'Nov', receita: 3000, pedidos: 32},
    {mes: 'Dez', receita: 1600, pedidos: 35}

];


class AnaliseVendas {
    constructor(vendaPorMes){
        this.vendaPorMes = vendaPorMes;
    }

    calcularTotalTrimestral(trimestre, propriedade) {
        let indiceInicial = (trimestre -1 ) * 3
        let indiceFinal = indiceInicial  + 3
        let vendasTrimestre = this.vendaPorMes.slice(indiceInicial, indiceFinal)
        return vendasTrimestre.reduce((total, venda) => {
            return total + venda[propriedade]
        }, 0)
    }
    obeterTotaisTrimestrais() {
     let receitaT1 = this.calcularTotalTrimestral(1, 'receita')
     let pedidosT1 = this.calcularTotalTrimestral(1, 'pedidos')
     let receitaT2 = this.calcularTotalTrimestral(2, 'receita')
     let pedidosT2 = this.calcularTotalTrimestral(2, 'pedidos')
     let receitaT3 =  this.calcularTotalTrimestral(3, 'receita')
     let pedidosT3 =   this.calcularTotalTrimestral(3, 'pedidos')
     let receitaT4 =   this.calcularTotalTrimestral(4, 'receita')
     let pedidosT4 =  this.calcularTotalTrimestral(4, 'pedidos')

     return {
        receitaT1,
        pedidosT1,
        receitaT2,
        pedidosT2,
        receitaT3,
        pedidosT3,
        receitaT4,
        pedidosT4

     }
    }

    

    normalizarValores() {
        const totais = this.obeterTotaisTrimestrais()
        const receitas = [
            totais.receitaT1,
            totais.receitaT2,
            totais.receitaT3,
            totais.receitaT4
        ]

        const pedidos = [
            totais.pedidosT1,
            totais.pedidosT2,
            totais.pedidosT3,
            totais.pedidosT4
        ]

        const maximoReceitas = Math.max(...receitas)
        const maximoPedidos = Math.max(...pedidos)

        const receitasNormalizadas = receitas.map(receita =>  (receita / maximoReceitas) * 100)
        const pedidosNormalizados = pedidos.map(pedido =>  (pedido / maximoPedidos) * 100)

        return {
            receitasNormalizadas,
            pedidosNormalizados
        }
       
        
    }

} // Fim Analise de vendas

const analise = new AnaliseVendas (vendaPorMes)
const dadosNormalizados = analise.normalizarValores()

const vendasPorCategorias = [
    {categoria: 'Eletronicos', valor: 20293.69},
    {categoria: 'Casa & Decorações', valor: 42293.89},
    {categoria: 'Moda', valor: 32293.99},
    {categoria: 'Outros', valor: 43344.79}
]

const coresCategorias = {
  eletronicos: "#8B7CFF",     // roxo
  casaDecoracao: "#53A8FF",     // azul
  moda: "#4ED6A0",              // verde
  outros: "#F4A261"             // laranja
};

const cores = Object.values(coresCategorias)

const bordasPorCategorias = {
    eletronicos: '#6554D9',
    casaDecoração: '#2879C7',
    moda: '#23996B',
    outros: '#C87935'
}

const bordas = Object.values(bordasPorCategorias)



new Chart(graficoRadar, {
    type: 'radar',
    data: {
        labels: [
            '1.º Trimestre',
            '2.º Trimestre',
            '3.º Trimestre',
            '4.º Trimestre '

        ],
        datasets: [
            {
                label: 'Receita',
                data: dadosNormalizados.receitasNormalizadas,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 7,
                pointBorderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: 'rgba(54, 162, 235, 1)',
                pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointHoverBorderColor: '#ffffff'

            }, // Receitas

            { //  Pedidos
                label: 'Pedidos',
                data: dadosNormalizados.pedidosNormalizados,
                fill: true,
                backgroundColor: 'rgba(248, 248, 248, 0.2)',
                borderColor: 'rgba(75, 192, 100, 1)',
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 7,
                pointBorderWidth: 2,
                pointBackgroundColor: 'rgba(75, 192, 100, 1)',
                pointBorderColor: 'rgba(75, 192, 100, 1)',
                pointHoverBackgroundColor: 'rgba(75, 192, 100, 1)',
                pointHoverBorderColor: '#ffffff'


            }, // Pedidos

        
        ], // Fim DataSets

    }, // Fim Data

     options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins:{
                title: {
                    display: true,
                    text: 'Desempenho Trismestral',
                    color: '#FFFFFF'
                },

                

                legend: {
                    labels: {
                        color: '#FFFFFF'
                    }
                }

            }, // Fim Plugins

            scales: {
                r:{
                    circular: true,

                    min: 0,

                    max: 100, 

                    beginAtZero: true,

                    angleLines:{
                        display: true
                    },

                    ticks: {
                        display: false
                    },

                    pointLabels: {
                        display: true,
                        font: {
                            size: 12,
                        },
                        color: '#FFFFFF'

                    },

                   
                }
            } // fim sclaes
        } // fim options
}) // Fim Grafico Radar







new Chart(graficoRosca , {
    type: 'doughnut',
    data: {
        labels: vendasPorCategorias.map(venda => venda.categoria),
        datasets: [{
            label: 'Receita Total €',
            data: vendasPorCategorias.map(venda => venda.valor),
            hoverOffset: 15,
            backgroundColor: cores,
            borderColor: bordas,
            borderWidth: 1


        }]
    }, // Fim Data

    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '59%',
        radius: '60%',
        plugins: {
            legend: {
              title: {
                display: true,
                text: 'Receita Total',
                color: '#FFFFFF'

                },

               labels: {
                usePointStyle: true,
                pointStyle: 'rect',
                pointStyleWidth: 10,
                color: '#FFFFFF'
               
                
               }
            }
        }
    }
}) // Fim Grafico Rosca









new Chart(graficoLinha, {
    type: 'line',
    data:{
        labels: vendaPorMes.map(venda => venda.mes),
        datasets: [{
            label: 'Evolução €',
            data: vendaPorMes.map(venda => venda.receita),
            borderColor: '#23275acb' ,
            borderWidth: 2,
            backgroundColor: 'rgba(18, 39, 68, 0.796)',
            pointRadius: 5,
            pointBackgroundColor: '#FFFFFF',
            pointBorderColor: '#14243aa6',
            pointBorderWidth: 1,

            tension: 0.3, // Tensão das linhas, se vai ficar reta ou curvada
            fill: true, // Sombra Da Linha

             
        }] // Fim DataSets
            
        
    },// Fim Data

    options: {
         responsive: true,
         maintainAspectRatio: false,

         plugins: {
            title: {
                display: true,
                text: 'Evolução Mensal por Mês',
                color: '#FFFFFF',
                font: {
                    size: 14,
                    weight: 'bold'
                },
                 padding: {
                   bottom: 14
                }
            }, // Fim Tittle

            legend: {
                labels: {
                    color: '#FFFFFF',
                    font: {
                        size: 12
                    }
                }

            } // Fim Legend

        
         }, // Fim Plugins





         scales: {
            x: {
             ticks: {
                color: '#AFC2D8' // Cor dos meses
            },
             grid: {
                color: 'rgba(255, 255, 255, 0.05)'
            }
          },

            y: {
                beginAtZero: true,
                ticks: {
                     color: '#AFC2D8', // Cor dos valores
                    callback: (valor) => `€ ${valor}`,
                    stepSize: 1500
                }
            }
         }

} // Fim Options

}) // Fim Grafico Linha

new Chart(graficoBar, {

    type: 'bar',
    data: {
        labels: vendaPorMes.map(venda => venda.mes),
        datasets:[{
            label: 'Receita €',
            data: vendaPorMes.map(venda => venda.receita),
            backgroundColor: cores,
            borderColor: bordas,
            categoryPercentage: 0.7,
            barPercentage: 0.8
        }]
    }, // Fim Data
   
    options: {
          responsive: true,
    maintainAspectRatio: false,

    plugins: {
        title: {
            display: true,
            text: ' Vendas Por Categorias ',
            color: '#F8FAFC',
            font: {
                size: 13,
                weight: 'bold'
            },
            padding: {
                bottom: 16
            }
        },

        legend: {
            labels: {
                color: '#CBD5E1',
                font: {
                    size: 13
                },
                boxWidth: 40,
                padding: 16,
                usePointStyle: true,
                pointStyle: 'triangle',
                pointStyleWidth: 10
            }
        }
    },

    scales: {
        x: {
            ticks: {
                color: '#CBD5E1',
                font: {
                    size: 12
                }
            },
            grid: {
                color: 'rgba(148, 163, 184, 0.06)'
            },
            border: {
                color: '#293548'
            }
        },

        y: {
            beginAtZero: true,
            ticks: {
                color: '#CBD5E1',
                stepSize: 1500,
                callback: (valor) => `€ ${valor}`
            },
            grid: {
                color: 'rgba(148, 163, 184, 0.10)'
            },
            border: {
                display: false
            }
        }
    }

    } // Fim Options
        

}) // Fim Chart Grafico Barras


    
