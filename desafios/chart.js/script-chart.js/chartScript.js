

/*
const grafico = document.getElementById('grafico')
const gastos = [
    {nome: "Alimentação", preco: 180},
    {nome: "Transporte", preco: 65 },
    {nome: "Lazer", preco: 90  },
    {nome: "Compras", preco: 120 },
    {nome: "Contas", preco: 240 }
]

new Chart(grafico, {
    type: 'bar',
    data:{ // rótulos e séries de valores (guardar)
        labels: gastos.map(gasto => gasto.nome), // Para mostrar todos os nomes que tem dentro do meu object
        datasets: [{
            label: 'Gastos (€)',
            data: gastos.map(gasto => gasto.preco), // Mostra todos os preco do meu object
            backgroundColor: [ // Cada Barra (Coluna) Ficara com Cores Diferentes
                'rgba(34, 197, 94, 0.5)',   // Alimentação — verde
                'rgba(59, 130, 246, 0.5)',  // Transporte — azul
                'rgba(168, 85, 247, 0.5)',  // Lazer — roxo
                'rgba(249, 115, 22, 0.5)',  // Compras — laranja
                'rgba(239, 68, 68, 0.5)'    // Contas — vermelho
            ],
            borderColor: [ // Cada borderColor é aplicado à barra que está na mesma posição:
                  'rgb(21, 128, 61)', // Alimentação - verde 
                  'rgb(37, 99, 235)', // Transporte - azul
                  'rgb(126, 34, 206)', // Lazer - roxo
                  'rgb(194, 65, 12)', // Compras - Laranja
                  'rgb(185, 28, 28)' // Contas - vermelho
            ],
            borderWidth: 3, // Para Mostrar a Bordar
            categoryPercentage: 0.7, // controla o espaço reservado para cada categoria.
            barPercentage: 0.5, // controla quanto desse espaço a barra ocupa. obs: [Valores menores = barras mais finas e mais espaço entre elas.]
        }],

        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales:{
                y:{
                    beginAtZero : true // Meu eixo y começara do 0
                }
            },
            plugins: {
             title: {
                display: true, 
                text: "Gastos De Outubro"
            },
              legend: {
                position: 'bottom' // posição bottom (em baixo)
            }
           }


        }

    }
});
*/

const grafico = document.getElementById('grafico')
const gastos = [
  { nome: 'Alimentação', previsto: 200, real: 180 },
  { nome: 'Transporte', previsto: 80, real: 65 },
  { nome: 'Lazer', previsto: 70, real: 90 },
  { nome: 'Compras', previsto: 100, real: 120 },
  { nome: 'Contas', previsto: 250, real: 240 }
];

new Chart (grafico, {
    type: 'bar',
    data:{
        labels: gastos.map(gasto => gasto.nome),
        datasets: [
            {
                label: 'Orçamento Previsto (€)',
                data: gastos.map(gasto => gasto.previsto),
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgb(37, 99, 235)',
                borderWidth: 2,
                categoryPercentage: 0.7,
                barPercentage: 0.5
                                                   // 2 DATASETS LABEL(Orçamento - Previsto) Label(Gasto - Real)
            },
            {
                label: 'Gasto Real (€)',
                data: gastos.map(gasto => gasto.real),
                backgroundColor: 'rgb(255, 43, 54)',
                borderColor: 'rgb(255, 50, 61)' ,
                borderWidth: 2,
                categoryPercentage: 0.7,
                barPercentage: 0.5

            }
        ] // fim datasets

    },// Fim Data

    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y:{
                begintAtZero: true
            }
        },
        plugins: {
            title:{
                display: true,
                text: 'Orçamento de Outubro: previsto vs. real'
            },

            legend: {
                position: 'bottom'
            }
        }

    }
    
})



   


