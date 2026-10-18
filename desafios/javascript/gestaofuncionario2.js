


const inputName = document.querySelector("#name")
const inputAge = document.querySelector("#age")
const form = document.querySelector("#form-official")
const inputMail = document.querySelector("#mail")
const inputPassword = document.querySelector("#password")
const inputPosition = document.querySelector("#position")
const inputSalary = document.querySelector("#salary")
const inputCode = document.querySelector("#code")
const totalEmployees = document.querySelector("#total-employees")
const totalSalary = document.querySelector("#total-salary")
const averageSalary = document.querySelector("#average-salary")
const highestSalary = document.querySelector("#highest-salary")
const officialList = document.querySelector("#official-list")
const searchCode = document.querySelector("#search-code")
const buttonSearch = document.querySelector("#btn-search")
const filterPosition = document.querySelector("#filter-position")
const increasePosition = document.querySelector("#increase-position")
const percentage = document.querySelector("#percentage")
const buttonIncrease = document.querySelector("#btn-increase")
const buttonFilter = document.querySelector("#btn-filter")
const buttonShowAll = document.querySelector("#btn-show-all")


function Person (name,age) {
    this.name = name;
    this.age = age;
}

function Officials (name, age, mail, password, position, salary, code) {
    Person.call(this, name, age)

    this.mail = mail;
    this.password = password;
    this.position = position;
    this.salary = salary;

    Object.defineProperty(this, 'code', {
        value: code,
        enumerable: true,
        writable: false,
        configurable: false
    })

}

Object.setPrototypeOf(Officials.prototype, Person.prototype)


Officials.prototype.validateName = function () {
    const validName = /^[A-Z][a-z]{2,}$/
    return validName.test(this.name)
}

Officials.prototype.validateAge = function () {
    return Number.isInteger(this.age) && this.age >= 18 && this.age <= 65
}

Officials.prototype.validateMail = function () {
    const validMail = /^.+@(gmail|hotmail|outlook|empresa)\.pt$/
    return validMail.test(this.mail)
}

Officials.prototype.validatePassword = function () {
    const validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    return validPassword.test(this.password)
}

Officials.prototype.validateCode = function () {
    const validCode = /^FUN-\d{3}$/
    return validCode.test(this.code)
}

Officials.prototype.registration = function () {
    const name = this.validateName()
    const age = this.validateAge()
    const mail = this.validateMail()
    const password = this.validatePassword()
    const official = this.validateCode()
    return name && age && mail && password && official
}

const oficcials = []

const record = (evento) => {
    evento.preventDefault()
    console.log("Tudo OK....")

    const official1 = new Officials (
     inputName.value,
     Number(inputAge.value),
     inputMail.value, 
     inputPassword.value, 
     inputPosition.value,
     Number(inputSalary.value), 
     inputCode.value,
    )
    officialRegistration(official1)
    showOfficials()
    updateDashboard()
    cleanInputs()
    return official1
    
}

const officialRegistration = official => {
    if(!official.registration()) return 
    oficcials.push(official)
}

const searchOfficial = code => {
    const resul = oficcials.find(function(official) {
        return official.code === code
    })

    return resul
}

const filterByPosition = position => {
    const resul = oficcials.filter(official => {
        return official.position.toUpperCase() === position.toUpperCase()
    })
    return resul
}

const calculatePayroll = () => {
    const totalSalary = oficcials.reduce((accumulator,official) => accumulator + official.salary , 0 )
    return totalSalary
}

const calculateAverageSalary = () => {
    if(oficcials.length === 0) return 0
    const calculated = calculatePayroll()
    const average = calculated / oficcials.length
    return average
}

const increaseSalaryByPosition = (position, percentage) => {
    const filtered = filterByPosition(position)
    filtered.forEach(official => {
        const increase = official.salary * (percentage / 100)
        official.salary = official.salary + increase
        return increase
    })
}

const search = () => {
    console.log("CLIQUEI EM BUSCAR")
    console.log("Código digitado:", searchCode.value)
    officialList.innerText = ""
    const foundOfficial = searchOfficial(searchCode.value)
    console.log("Funcionário encontrado:", foundOfficial)
     if(!foundOfficial) return
    createOfficialRow(foundOfficial)
    return foundOfficial
}

const filter = () => {
    console.log("CLIQUEI EM FILTRAR")
    officialList.innerText = ""
    const filteredOfficials = filterByPosition(filterPosition.value)
       filteredOfficials.forEach(official => createOfficialRow(official))
    return filteredOfficials

}

const increaseSalary = () => {
    const inputPosition = increasePosition.value
    const inputPercentage = Number(percentage.value)
    increaseSalaryByPosition(inputPosition, inputPercentage)
    showOfficials()
    updateDashboard()
}

const cleanInputs = () => {
    inputName.value = ""
    inputAge.value = ""
    inputMail.value = ""
    inputPassword.value = ""
    inputPosition.value = ""
    inputSalary.value = ""
    inputCode.value = ""

}

const createOfficialRow = official => {
      console.log("ENTROU NA CREATE:", official)
      const tr = document.createElement("tr")
        const tdName = document.createElement("td")
        tdName.innerText = `${official.name}`

        const tdAge = document.createElement("td")
        tdAge.innerText = `${official.age}`

        const tdMail = document.createElement("td")
        tdMail.innerText = `${official.mail}`

        const tdPosition = document.createElement("td")
        tdPosition.innerText = `${official.position}`

        const tdSalary = document.createElement("td")
        tdSalary.innerText = `${official.salary}`

        const tdCode = document.createElement("td")
        tdCode.innerText = `${official.code}`

        const button = document.createElement("button")
        button.textContent = "Remover"
        button.addEventListener("click", () => {
            removeOfficial(official.code)
            showOfficials()
            updateDashboard()
        })
    
        const tdAction = document.createElement("td")
        tdAction.appendChild(button)
          tr.appendChild(tdName)
          tr.appendChild(tdAge)
          tr.appendChild(tdMail)
          tr.appendChild(tdPosition)
          tr.appendChild(tdSalary)
          tr.appendChild(tdCode)
          tr.appendChild(tdAction)
        officialList.appendChild(tr)

}

const showOfficials = () => {
    officialList.innerText = ""
    oficcials.forEach(official => {
        createOfficialRow(official)
    })
}



const generateReport = () => {
    const highestSalary = oficcials.reduce((accumulator, official) => official.salary > accumulator ? official.salary : accumulator ,0)
    const simplifiedVersion = oficcials.map((official) => {
        const {name, position, salary} = official
        return {
            name: name,
            position: position,
            salary: salary
        }
    })
    
    const report = {
        totalEmployees: oficcials.length,
        totalSalary: calculatePayroll(),
        averageSalary: calculateAverageSalary(),
        highestSalary: highestSalary,
        simplifiedVersion: simplifiedVersion
    }
    return report

}
console.log(generateReport())

const updateDashboard = () => {
    const report = generateReport()

    totalEmployees.innerText = `${report.totalEmployees}`
   
    totalSalary.innerText = `${report.totalSalary}`

    averageSalary.innerText = `${report.averageSalary.toFixed(2)}`

    highestSalary.innerText = `${report.highestSalary}`


}

const removeOfficial = code => {
    const indice = oficcials.findIndex(official => official.code === code)
    if (indice !== -1) {
        oficcials.splice(indice, 1)
        return true
    }else {
        return false
    }

}


form.addEventListener("submit", record)
buttonSearch.addEventListener("click", search)
buttonFilter.addEventListener("click", filter)
buttonShowAll.addEventListener("click", showOfficials)
buttonIncrease.addEventListener("click", increaseSalary)

