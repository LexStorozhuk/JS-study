(a,b) => {
    let c
    a = a + 1
    c = a + b
    return c
}
setTimeout(function () {
    console.log('Try new way')
}, 2000)
const myFunction = (a,b) => {
    let c
    a = a + 1
    c = a + b
    return c
}
a => {
    'Body of function'
}
const a = 10
const b = 3
const myShortFn = a => {
   let b
   b = a + 1
   return b
}
const myFn2way = (a, b) => a + b 
const g = 0
const f = 1
g & f
function multByFacytor(value, multiplier = 1) {
    return value * multiplier
}
multByFacytor(10, 3)
multByFacytor(10)

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
}) 

const firstPost = {
    id: 1,
    author: 'Alex',
}
newPost(firstPost)
console.log (firstPost)
console.dir(firstPost)
console.table(firstPost) 
const newObject = {
    ...firstPost,
    collor: 'red'
}
console.table(newObject)
const fnWithError = () => {
    throw new Error ('Some Error')
}

try {
    fnWithError()
} catch (error) {
    console.error(error)
    console.log (error.messeage)
}
console.log ('Continue...')
