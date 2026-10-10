

/*
data      = todos os dados do gráfico
labels    = nomes das categorias/posições
datasets  = uma ou mais séries de valores
options   = aparência e comportamento do gráfico
```




const grafico = document.getElementById('grafico')
let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "agosto", "setembro", "outubro", "Novembro", "Dezembro"]
let lucro = [1500, 1300, 1700, 2000, 3000, 4000, 2500, 1200, 6000, 7600, 1100, 2100]

new Chart(grafico, {
    type: 'bar',
    data: {
        labels: mes,
        datasets: [{
            label: "Vendas (€)",
            data: lucro,
            backgroundColor: 'blue',
            borderColor: "red" ,
            borderWidth: 1,
            

        }]

    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales:{
            y:{
                beginAtZero: true
            }
        }
    }
})




const grafico = document.getElementById('grafico')
const dias = [
  'Segunda', 'Terça', 'Quarta',
  'Quinta', 'Sexta', 'Sábado', 'Domingo'
];
const horasAna = [2, 3, 1, 4, 2, 5, 3];
const horasJoao = [1, 2, 3, 2, 4, 2, 1];

new Chart(grafico, {
    type: 'line',
    data: {
        labels: dias,
        datasets:[
            {
            label: 'Ana',
            data: horasAna,
            borderColor: 'blue',
            borderWidth: 3,
            tension: 0.3
        },
        {
            label: 'João',
            data: horasJoao,
            borderColor: 'red',
            borderWidth: 3,
            tension: 0.3
        }

        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y:{
                beginAtZero: true
            }
        },

        
    plugins: {
        title: {
            display: true,
            text: "Horas Estudadas Durante a Semana"
        },

        legend: {
            display: true
        }
    }
    }


});

*/


const grafico = document.getElementById('grafico')
const categorias = [
  'Aluguel',
  'Alimentação',
  'Transporte',
  'Lazer',
  'Outros'
];

const gastos = [800, 320, 140, 180, 90];

new Chart(grafico, {
    type: 'doughnut',
    data:{
        labels: categorias,
        datasets: [{
            label: 'Gastos mensais (€)',
            data: gastos,
            borderColor: 'white',
            borderWidth: 2,
            backgroundColor: [
              '#ef4444', // Aluguel
              '#f59e0b', // Alimentação
              '#3b82f6', // Transporte
              '#8b5cf6', // Lazer
              '#64748b'  // Outros
              ]
        }]
    },

    options: {
        cutout: '60%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
            display: true,
            text: 'Distribuição dos gastos mensais'
        },

        legend: {
            display: {
                display: true
            }
        }

        }
     
    }

})