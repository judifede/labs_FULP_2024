// Iteration 1 - fullName

function fullName(person) {
    return person.firstName + " " + person.lastName
}

const object1 = { firstName: 'Luis', lastName: 'Burón' }
const result1 = fullName(object1)
// console.log(result1)

// Iteration 2 - Who is online?

//10 minutes = 600 seconds
function whoIsOnline(obj) {
    const newObj = {}

    for (let i = 0; i < obj.length; i++) {
        if (obj[i].lastActivity <= 600 && obj[i].status === 'online') {
            newObj.online = newObj.online ? newObj.online.push(obj[i].username) : [obj[i].username]
        } else if (obj[i].status === 'offline') {
            newObj.offline = newObj.offline ? newObj.offline.push(obj[i].username) : [obj[i].username]
        } else if (obj[i].lastActivity > 600 && obj[i].status === 'online') {
            newObj.afk = newObj.afk ? newObj.afk.push(obj[i].username) : [obj[i].username]
        }
    }

    return newObj
}

const object2 = [{
    username: 'David',
    status: 'online',
    lastActivity: 600
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 2320
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 4320
}]
const object2_notOnline = [{
    username: 'Lucy',
    status: 'offline',
    lastActivity: 2320
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 4320
}]
const result2 = whoIsOnline(object2_notOnline)
// console.log(result2)

// Iteration 3 - Overheating

var yourComputer = {
    cpu: 25,
    gpu: 45,
    motherBase: 15,
    dvdDriver: 25,
    rom: 5,
    ram: 10,
}
var maxTemperatures = {
    cpu: 33,
    gpu: 42,
    motherBase: 20,
    dvdDriver: 20,
    rom: 10,
    ram: 20,
}

function overheating(yourComputer, maxTemperatures) {
    const newObj = { ...yourComputer }

    for (var key in yourComputer) {
        newObj[key] = yourComputer[key] > maxTemperatures[key] ? false : true;
    }

    return newObj
}

const result3 = overheating(yourComputer, maxTemperatures)
// console.log(result3)

// Bonus - 1/ strCount()

function strCount(obj) {
    let strCount = 0;

    for (var key in obj) {
        if (typeof obj[key] === 'string') {strCount++}

        if (Array.isArray(obj[key])) {
            let flatted = obj[key].flat(Infinity)
            for (let i = 0; i < flatted.length; i++) {
                if (typeof flatted[i] === 'string') {strCount++}
            }
        }
    }

    return strCount
}

const objectBonus1 = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4, ["A", "B", ["C"]]],
    fifth: null
}
const resultBonus1 = strCount(objectBonus1)
console.log(resultBonus1)

// Bonus - 2/ fullNameFormatted(person)

function fullNameFormatted(person) {
    let name = person.firstName[0].toUpperCase() + person.firstName.substring(1, person.firstName.length)
    let surname = person.lastName[0].toUpperCase() + person.lastName.substring(1, person.lastName.length)

    return name + " " + surname
}

const objectBonus2 = { firstName : 'Luis' , lastName: 'burón' }
const resultBonus2 = fullNameFormatted(objectBonus2)
console.log(resultBonus2)

// Bonus - 3/ fullNameFormattedv2(person)

function fullNameFormattedv2(person) {
    let arrNames = person.firstName.split(" ")
    let arrSurnames = person.lastName.split(" ")
    let name = ""
    let surname = ""
    for (let i = 0; i < arrNames.length; i++) {
        name += arrNames[i][0].toUpperCase() + arrNames[i].substring(1, arrNames[i].length) + " "
    }
    for (let i = 0; i < arrSurnames.length; i++) {
        surname += arrSurnames[i][0].toUpperCase() + arrSurnames[i].substring(1, arrSurnames[i].length) + " "
    }

    return (name + surname).trim()
}

const objectBonus3 = { firstName : 'Luis Álvaro' , lastName: 'burón mejías' }
const resultBonus3 = fullNameFormattedv2(objectBonus3)
console.log(resultBonus3)

