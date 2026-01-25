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