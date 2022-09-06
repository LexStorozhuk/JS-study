const person = {
    name: 'Alex',
    age: 27
}
const person1= {...person}
const person3 = {
    name: 'Serhio',
    age: 27
}
const person5 = Object.assign ({},person3)
const person6 = {
    age: 27,
    gender: 'man',
    info: {
        eyes: 'green',
        didHifun: true,
    }
}
const person2= JSON.parse(JSON.stringify(person)) 
const person4 = {...person}
function sum (a, b) {
    const c = a + b
    console.log(c)
    return c
}
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c 
}
myFn (10, 3)
const personeOne = {
    name: 'bob',
    age: 21 
}
function increasePersonAge(person) {
    person.age +=1
    return person
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign ({}, person)
    updatedPerson.age +=1
    return updatedPerson 
}

const updatedPersonOne = increasePersonAge(personeOne)
console.log ('The best')

function printMyName() {
    console.log ('Alex')
}
setTimeout(printMyName, 2000)
