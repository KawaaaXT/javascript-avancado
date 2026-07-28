
//
// const umDia = 60 * 60 * 24 * 1000;
   //const data = new Date(0 + tresHoras - umDia)
   //console.log(data.toString())
// 
// 
// const tresHoras = 60 * 60 * 3 * 1000;
   // const umDia = 60 * 60 * 24 * 1000;
 // const data = new Date(0 + tresHoras - umDia)
// console.log(data.toString())

//const data = new Date(2024, 8, 10);
//console.log(data.toString())

//const data = new Date(2021, 4, 12, 15, 30, 59)
//const data = new Date()
//console.log(data.toString())
//console.log("Dia do Mês: ", data.getDate())
//console.log( "Dia Da Semana: ", data.getDay())
//console.log("Mês :", data.getMonth() + 1) // o +1 é para deixa no numêro do mês atual do Nosso Calendario
//console.log("Ano :", data.getFullYear())
//console.log("Hora: ", data.getHours())
//console.log("Minutos :", data.getMinutes())
//console.log("Segundos: ", data.getSeconds())
const data = new Date()
function formataData(data){
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()
    const horas = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()
    return `Dia : ${dia}, Mes : ${mes}, Ano : ${ano}, Hora: ${horas}, Minutos : ${minutos}, Segundos ${segundos}`
    
};

const dataBrasil = formataData(data)

console.log(dataBrasil)