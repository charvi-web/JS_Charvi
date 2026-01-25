/*
// let score = "33abc" 
// let score=null
// let score = undefined
let score = 1
console.log(typeof score)  //string
console.log(typeof(score)) //string 

// let  valueINumber = Number(score)  //conversion from string
let valueINumber = Boolean(score) 
console.log(typeof valueINumber)  //number
console.log(valueINumber)  //NaN not a number -- in case of 33abc
//zero in case of null
// true mei 1 and false mei 0



let score2 = 33
let string = String(score2)
console.log(typeof string)  //string
console.log(string)  //33 "33"



*/



//operations

let value = 3
let negVal = -value
console.log(negVal)  //-3

let str1 = "hello"
let str2 = "world"
let str3 = str1+str2
console.log(str3)  //helloworld
let str4 = str1 + " " + str2
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log(+true);

let num1,num2,num3
num1 = num2 = num3 = 2+2
console.log(num1,num2,num3)  //4 4 4
