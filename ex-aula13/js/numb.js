let num1 = 0.7
let num2 = 0.1

num1 = ((num1 * 100) + (num2 * 100)) / 100 // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100 // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100 // 1.00


num1 = Number(num1.toFixed(2))

console.log(num1)
console.log(Number.isInteger(num1))

//console.log(Number.isNaN(tempo))
//console.log(num1.toFixed(2))
//console.log(num1.toString(2))
//console.log(` ${num1.toString()} ${num2}`)
//console.log(typeof num1, "Primeira variavel")
//console.log(typeof num1.toString(), "A mesma variavel") 


