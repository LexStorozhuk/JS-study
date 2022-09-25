const month = 2
switch (month) {
    case 12:
        console.log('December')
        break
        case 1:
        console.log('Jenuary')
        break
        case 2: 
        console.log('February')
        break
        default:
            console.log('This is not a winter month')

}
const value = 11
value
? console.log('Условие истино')
: console.log('Условие ложно')
const value1 = 11
const value2= 25
try {
let value = 11
console.log(value >= 0 ? value : -value)

value = -5
const res = value >= 0 ? value : -value
console.log(res)
} catch (error) {
    console.log(error)
}
