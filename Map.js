const myArray = [1, 2, 3]
const newArray = myArray.map(el => el * 3)
console.log(newArray)
console.log(myArray)
try { const myArray = [1, 2, 3]
const newArray = myArray.map((el) => {
    return el * 3
})
console.log(newArray)
} catch(error) {
console.error(error)
}
try {
    const newArray = myArray.map(function(el) {
        return el * 3
    })
} catch(error) {
    console.error(error)
}