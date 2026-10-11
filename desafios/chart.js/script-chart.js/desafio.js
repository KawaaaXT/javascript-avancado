


const grafico = document.getElementById('grafico')

const lojaA = [12, 19, 8, 15, 10]
const lojaB = [8, 14, 12, 9, 16]
const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai']


new Chart(grafico, {
    type: 'line',
    data:{
        labels: meses,
        datasets: [
            {
                label: 'Vendas Loja A (€)',
                data: lojaA,
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgb(37, 99, 235)',
                borderWidth: 3,
                borderDash: [6, 4], // Linha Tracejada 6- Tamanho do Traço 4- Esoaço Entre os Traços
                tension: 0.5, // Para mudarmos como a linha do grafico vai ficar , reta ou curva
                fill: true, // Preenche a área em baixo da linha : (sombra da linha)
            },

            {
                label: 'Vendas Loja B (€)',
                data: lojaB,
                backgroundColor: 'rgba(168, 85, 247, 0.5)',
                borderColor: 'rgb(126, 34, 206)',
                borderWidth: 3,
                borderDash: [8, 3], // [Linha Tracejada] 8- Tamanho do Traço /  3- Espaço Entre os Traços
                tension: 0.3,
                fill: true,
            }
        ]
    }, // Fim Data
    
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales:{
                y:{
                    beginAtZero: true
                }
            },
            plugins:{
                title:{
                    display: true,
                    text: 'Vendas por loja'
                },

                legend:{
                    position: 'bottom',
                    
                labels: {
                    color: 'black',
                    font:{
                        size: 14
                    }
                }
 
                
                }
            

            }
        }
})