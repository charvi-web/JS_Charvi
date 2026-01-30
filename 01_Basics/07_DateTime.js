//Dates
let myDate = new Date()
//different formats
console.log(myDate.toString()) 
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)


let myCreatedDate = new Date('2005-04-17') //month starts from 1
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date(2023,0,3,4,30)
console.log(myCreatedDate2.toLocaleString())


let myTimeStamp = Date.now()  //millisecond from jan 1970
console.log(myTimeStamp)


let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate()) 
newDate.toLocaleString('default',{weekday:"long"})

