class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    
    upvote() {
        this.votesQty += 1 
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }

}
const firstComment = new Comment('First comment')

console.log(firstComment instanceof Object)

console.log(firstComment instanceof Array )

console.log(firstComment instanceof Comment)

firstComment.upvote()

console.log(firstComment.votestQty)

firstComment.upvote()

console.log(firstComment.votestQty)

const secondComment = new Comment('Second Comment')
const thirdComment = new Comment('Third Comment')
secondComment.upvote()
console.log(secondComment.votesQty)
thirdComment.upvote()
console.log(thirdComment.votesQty)
secondComment.upvote()
thirdComment.upvote()
console.log(secondComment.votesQty)
console.log(thirdComment.votesQty)
console.log(firstComment)
Comment.mergeComments('First text.', 'Second text.')
console.log(firstComment)
class NumberArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}
const myArray = new NumberArray(2, 5, 7)
myArray.sum()