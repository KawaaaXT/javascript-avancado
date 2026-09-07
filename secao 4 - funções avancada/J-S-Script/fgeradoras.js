
/*
// Function Geradora
function* geradora1() {
    yield 'Valor 1';

    yield 'Valor 2';

    yield 'Valor 3';

    yield 'Valor 4';

}

const g1 = geradora1()

console.log(g1.next().value)


function* geradora2 (){
    let i = 0

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2()

console.log(g2.next().value)
*/


function* geradora3 () {
    yield 3
    yield 4
    yield 5
}

function* geradora4 (){
    yield* geradora3();

    yield 6

    yield 7

    yield 8


}

const g4 = geradora4()

for (let valor of g4){
    console.log(valor)
}


function* geradora5 () {
    yield function() {
        console.log("Olá Eu sou o Yield 1")

    }

    yield function () {
        console.log("e Eu vim do Yield 2")
    }
}

const g5 = geradora5()

let f1 = g5.next().value

let f2 = g5.next().value

f1()
f2()