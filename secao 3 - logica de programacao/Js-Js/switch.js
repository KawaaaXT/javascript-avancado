
const data = new Date()
const diaSemana = data.getDay()



function getdiaSemana (diaSemana){


    switch (diaSemana){
    case 0:
        return "Domingo";
       

    case 1:
        return "Segunda";
       

    case 2: 
        return "Terça";
        

    case 3: 
        return "Quarta";
        

    case 4: 
       return "Quinta";
        

    case 5: 
       return "Sexta";
        

    case 6: 
       return "Sabado";

       default:
       return "Dia Invalido";
};

};

const mensagemSemana = getdiaSemana(diaSemana)

console.log(mensagemSemana)

//const formatando = data.toLocaleString()
//const diaSemana = data.getDay() 
//console.log(formatando)