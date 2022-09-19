const myArray = [1, 2, 3]

console.log(myArray)

const myArray2 = new Array(1, 2, 3)

console.log(myArray2)

const myArray1 = [1, true, 'Alex']

myArray.length

myArray===myArray2

const myObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}
console.log(myObject)

const myArray5 = [1, 2, 3, 4]

myArray5[2]= 'abc'

console.log(myArray5[2])

myArray5[4] = true

console.log(myArray5)

console.log(myArray5.length)

console.log(myArray5)

myArray5.push(5)

myArray5.push(true)

console.log(myArray5)

myArray5.pop()

console.log(myArray5)

const removedElement = myArray5.pop()

console.log(myArray5)

console.log(removedElement)

console.log(myArray5)

myArray5.unshift(true)

myArray5.unshift('abc')

console.log(myArray5)

myArray5.shift()

const removedElement2 = myArray5.shift()

console.log(myArray5)

console.log(removedElement2)

myArray5.forEach(el => console.log(el * 2))

const res = myArray5.forEach(el => console.log(el * 2))

console.log(res)
