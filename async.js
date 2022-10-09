const asyncFn = async() => {
    throw new Error('There was an error!')
}
asyncFn()
.then(value => console.log(value))
.catch(error => console.log(error.message))


const timerPromise = () =>

new Promise ((resolve, reject) =>

setTimeout (() => resolve(), 2000))  
const asyncFn1 = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer ended', endTime - startTime)
}