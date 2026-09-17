
// Usando Map () , Filter (), Map (),  Juntos


const numeros = [10, 12, 15, 18, 50, 76, 100, 200]

const resultado = numeros
.filter((numero) => numero % 2 === 0)
.map((numero) =>   numero * 2 )
.reduce((acumulador, valor) => acumulador + valor , 0)

console.log(resultado)




 /*
  10,  12,  18,  50, 76, 100, 200 Pares 
  20,  24,  36, 100,152, 200, 400 Dobro
          932 A Soma De Todos Os Numeros Dobrados.
*/




/*
----- Retorne a soma do dobro de todos  os pares .

----> Filtrar Pares .

----> Dobrar os valores -> Map()

----> Reduzir (somarTudo) -> Reduce()

*/