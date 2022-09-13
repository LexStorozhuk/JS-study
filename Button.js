const buttonInfo = {
    text: 'buy'
}
const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}
const button = {
    ...buttonInfo,
    ...buttonStyle
}
console.table(button)
function b() {
    console.log('Try agan')
}
setTimeout(b, 3000)
const myName = 'Alex'
const myCity = 'Tomaspil'
const allAbaut = `${myName} from ${myCity}`  
console.log(allAbaut)
console.log(button)