const tinderUser = {}
// const tinderUser = new Object()
tinderUser.id = "13234d"
tinderUser.name = "samm"
tinderUser.loggedIn = false

const regularUser = {
    email : "smamm@gmail.com",
    fullname : { userfullname :{
    firstname : "Charvi", lastname : "singh"
    }
}
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2) //first is target and other are sources 
console.log(obj3)

const obj4 = {...obj1,...obj2}
console.log(obj4)



console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(Object.hasOwnProperty('loggedIn'))

//de-structure

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

const {courseInstructor : instr} = course
console.log(instr)

//api -- apna kaam kisi aur ke sir pr daal do
//jason
// {
//     coursename : "js in hindi",
//     price : "free",
//     courseInstructor : "hitesh"
// }   [{},{},{}]