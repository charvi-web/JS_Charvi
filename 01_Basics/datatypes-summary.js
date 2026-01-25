//primitive and non premitive
// Primitive data types in JavaScript include:
// Number , String , Boolean , Null , Undefined , Symbol , BigInt
// Non-primitive data types include: reference type like Objects, Arrays, Functions
const score = 45
const score2 = 67.3 //decimal nhi h 

const id = Symbol('123')
const anotherId = Symbol('123') //unique h dono alag h

console.log(id === anotherId) //false


const bigNumber = 346554675465496543654n

const heroes = ["shaktiman", "naagraj", "doga"]
const myObj = {
    name: "Raju",
    age: 23,
    isLoggedIn: false
}

function greetUser(name) {
    return `Hello ${name}`
}



//Stack(primitive) vs Heap(non-primitive) Memory
let youtubeName = "hiteshchaudhary.com"
let anotherYoutubeName = youtubeName //it makes a copy of the value
anotherYoutubeName = "CodeWithHitesh"

console.log(youtubeName) //hiteshchaudhary.com
console.log(anotherYoutubeName) //CodeWithHitesh

let user1 = {
    email: "user@google.com",
    upi : 78
}

let user2=user1

user2.email= "user2.comm"
console.log(user1.email)  // user1 and user2 stored in stack and their details stored in heap, so a refernce is made from user1 and user2 to heap memory. So when we change user2 email it also reflects in user1.