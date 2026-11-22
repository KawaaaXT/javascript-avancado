
function runtime ()  {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Ola Sou A Promise")
            resolve()
        }, 2000)
    })
}

const executa = async () => {
    await runtime()
    console.log("Terminou")
}

export default executa