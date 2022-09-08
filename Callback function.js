function print() {
const name = 'Alex'
console.log(name)
}
function anotherFunction () {
    console.log('Hello thursday')
    print()
}
function fnWithCallback(callbackFunction) {
    callbackFunction()
}
fnWithCallback(anotherFunction)
function withTime () {
    console.log ('Go to commit')
}
setTimeout(withTime, 3000)
