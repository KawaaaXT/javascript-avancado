
/*
const produtos = [
    { nome: 'Teclado', preco: 120 },
    { nome: 'Mouse', preco: 80 },
    { nome: 'Monitor', preco: 900 },
    { nome: 'Headset', preco: 250 },
    { nome: 'MousePad', preco: 60 }
]
const resultado = produtos.map(produto => produto.nome)

console.log(resultado)


const funcionarios = [
    {nome: "Ana", salario: 2300},

    {nome: "Kauã", salario: 1800},

    {nome: "Deyvid", salario: 3200},

    {nome: "Eduardo", salario: 4200}
];

const total = funcionarios.reduce((acumulador, valor) => {
    return acumulador + valor.salario.toFixed()
},0)

console.log(funcionarios)
console.log(total)



const compras = [
    {nome: "Teclado", preco: 150},

    {nome: "Mouse", preco: 50},

    {nome: "Monitor", preco: 1000},

    {nome: "Cabo HDMI", preco: 20},

    {nome: "HeadSet", preco: 300}
];

const resultado = compras
       .filter((valor) => valor.preco > 100)
       .map((produto) => produto.nome)


console.log(resultado)

*/


const pedidos = [
    { cliente: 'Kauã', valor: 120, pago: true },
    { cliente: 'Ana', valor: 80, pago: false },
    { cliente: 'Deyvid', valor: 250, pago: true },
    { cliente: 'Eduardo', valor: 50, pago: false },
    { cliente: 'Maria', valor: 300, pago: true },
    { cliente: "Roberta", valor: 250, pago: true}
];

const resultado = pedidos
     .filter(pedido => pedido.pago === true)
     .map(pessoa => pessoa.cliente)

console.log(resultado)
    