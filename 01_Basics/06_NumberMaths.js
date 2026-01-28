const score = 400;
const balance = new Number(100);
console.log(score);
console.log(balance)

console.log(balance.toString().length) // "100"--3
console.log(balance.toFixed(2)) // "100.00"  precision value kitni chahiye
const othernum = 1.56789;
console.log(othernum.toPrecision(3)) // itne hi digits dega

const h = 1000000
console.log(h.toLocaleString("en-IN")) // 10,00,000  //locales k hisab se format krke dega
console.log(h.toLocaleString("de-DE")) // 1.000.000 // german format


//----------------------MATHS--------------------------- 
console.log(Math)
console.log(Math.abs(-4))   //4 +ve remains +ve
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.2))  //5  always upper
console.log(Math.floor(4.9)) //4  always lower
console.log(Math.min(0,150,30,20,-8,-200))  //-200
console.log(Math.max(0,150,30,20,-8,-200))  //150
console.log(Math.random())  //0 to 1 ke beech me koi bhi decimal value dega
console.log((Math.random()*10)+1) //1  to 10 ke beech me koi bhi decimal value dega
console.log(Math.floor(Math.random()*10)) //0 to 9 ke beech me koi bhi integer value dega  


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min) //math.random se 0 and 1 ke beech mei number milega, max-min is going to me range and + 1 for avoiding 0 wala case + min so as to start from it.

