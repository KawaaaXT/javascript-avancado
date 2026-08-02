const main = document.querySelector('#content')
const h1 = document.querySelector('#texto')
const body = document.body
const date = new Date()
const dateTime = date.getDay()

function dayWeek (dateTime){
   switch (dateTime){
    case 0: 
         h1.innerHTML = ` Domingo , ${date.getDate()}  de Julho de  ${date.getMonth() }  As ${date.toLocaleTimeString()} Horas `  ;
         body.style.backgroundColor = "azul";
         return;
     case 1: 
         h1.innerHTML = ` Segunda- Feira ,  ${date.getDate()} de Julho de ${date.getMonth() }   As ${date.toLocaleTimeString()} Horas   `;
         body.style.backgroundColor = "azul" ;
         return;

    case 2: 
         h1.innerHTML = `Terca-Feira ,  ${date.getDate()} de Julho de ${date.getMonth() }  As ${date.toLocaleTimeString()} Horas `;
         body.style.backgroundColor = "brown";
         return;

    case 3:
         h1.innerHTML = ` Quarta - Feira ,  ${date.getDate()} de Julho de   ${date.getFullYear()}   As ${date.toLocaleTimeString()} Horas`;
         body.style.backgroundColor = "green";
         return;

    case 4:
         h1.innerHTML = ` Quinta - Feira ,   ${date.getDate()} de Julho de ${date.getMonth() }  As ${date.toLocaleTimeString()} Horas ` ;
         body.style.backgroundColor = "red";
         return;

    case 5: 
        h1.innerHTML = ` Sexta - Feira ,  ${date.getDate()} de Julho de ${date.getMonth() }  As ${date.toLocaleTimeString()} Horas ` ;
        body.style.backgroundColor = "pink";
        return ;
  
    case 6:
        h1.innerHTML = ` Sabado ,  ${date.getDate()} de Julho de ${date.getMonth() }  As ${date.toLocaleTimeString()} Horas ` ;
        body.style.backgroundColor = "yellow";
        return;
    
    default: 
        h1.innerHTML = ` QualquerCoisa `;
        body.style.backgroundColor = "azul";
        return;
};
return h1;
};

dayWeek(dateTime)