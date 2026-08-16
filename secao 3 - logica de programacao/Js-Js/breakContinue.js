
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numeros.length ; i++){
    if (i === 2 || i === 3 ){ // Pulou o numero 2 ,e continuou o laço
        continue
    }

    if (i === 8){
        console.log("Vai Parar aqui")
        break
    }
    console.log(i)
}