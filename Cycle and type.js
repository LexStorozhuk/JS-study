for (let i = 0; i < 5; i++) {
    console.log (i)
}
const myArray = ['First', 'Second', 'Third']
for (let i = 0; i < myArray.length; i++) {
    console.log(i)
}
try {
    const myArray = ['first', 'second', 'third']
    myArray.forEach((element, index) => {
        console.log(element, index)
    })
} catch(error) {
    console.error(error)
}
let i = 0
while (i < 5) {
    console.log(i)
    i++
}
try {
    let i = 0
    do { console.log(i)
        i++
    } while(i < 5)
} catch(error) {
    console.error(error)
}
try {
    let i = 10
    do {
        console.log(i)
        i++
    } while(i < 5)
} catch(error) {
    console.error(error)
}
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
for (const key in myObject) {
    console.log(key, myObject[key])
}
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})

Object.values(myObject).forEach(value => {
    console.log(value)
})
try {
    const myArray = [true, 10, 'abc', null]
for (const key in myArray) {
    console.log(myArray[key])
}
} catch(error) {
    console.error(error)
}
const myString = 'Hey'
for (const letter of myString) {
    console.log(letter)
}
try {
    const myArray = [true, 10, 'abc', null]
for (const element of myArray) {
    console.log(element)
}
} catch(error) {
    console.error(error)
}