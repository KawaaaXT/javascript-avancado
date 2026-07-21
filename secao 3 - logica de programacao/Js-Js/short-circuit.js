

// =================================
// Short-circuit (curto-circuito)
// =================================

// && retorna o primeiro valor falsy
// || retorna o primeiro valor truthy


let nome = "Kauã"


function falarOi(){
    return nome && NaN && "Kauã"
}

console.log(nome && falarOi())

let usuario = ""

function usuarioDigitou(){
    return usuario || "Kauã de lima Pereira"
};

console.log(usuario || usuarioDigitou())