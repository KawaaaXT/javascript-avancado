
const grafico = document.getElementById('grafico')

const produtos = [
  'Camisetas',
  'Calças',
  'Tênis',
  'Bonés',
  'Jaquetas'
]
const vendas = [35, 20, 25, 8, 12]

new Chart(grafico, {
    type: 'doughnut', // Gráfico Rosca
    data:{
      labels: produtos,
      datasets:[
        {
          label: 'Quantidade de vendas',
          data: vendas,
          hoverOffset: 20, //  Isso faz a fatia se afastar um pouco quando o mouse passa por cima.
          borderRadius: 5 ,
          backgroundColor: [
             '#3b82f6', // Camisetas — azul
             '#a855f7', // Calças — roxo
             '#22c55e', // Tênis — verde
             '#f59e0b', // Bonés — laranja
             '#ef4444'  // Jaquetas — vermelho
          ],

          borderColor: '#ffffff',
          borderWidth: 3,
          
          
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
       animation: {
        animateRotate: true, // as fatias entram girando
        animateScale: true, // a rosca cresce do centro
         duration: 2000, // efeito dura 2 segundos
         easing: 'easeOutBounce' // finaliza com quique.
        },
      cutout: '50%',  // Tamanho Do Furo
      circumference: 360, // Mostrar somente parte do círculo » 360 = Giro Completo

      plugins:{
        title:{
          display: true,
          text: 'Vendas por produto'
        },

        legend:{
          position: 'bottom',

          labels:{
            color: 'black',
            font:{
              size: 17
            }
          }
        }
      }

      
    }
})