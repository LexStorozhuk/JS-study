const userProfile = {
    name: 'Alex',
    commentsQty: 23,
    hasSignedAgreement: false
}
const {name, commentsQty} = userProfile
const {hasSignedAgreement} = userProfile
console.log(name)
console.log(commentsQty)
console.log(hasSignedAgreement)
const fruit = ['Apple', 'Banana']
const [fruitOne, fruitTwo] = fruit
console.log(fruitOne)
console.log(fruitTwo)
const userInfo = ({name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}
userInfo(userProfile)
console.log(userInfo(userProfile))