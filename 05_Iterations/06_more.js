let myNumbers = [1,2,3,4,5,6,7,8,9,10];
// let ni= myNumbers.map((n)=>(n+10)); //automatically returns
//chaining--do teen methods ek saath use krna
//m se map m se modifications
let ni = myNumbers
.map((n)=>n*10)
.map((n)=>n+1)
.filter((n)=>n>=40)
console.log(ni);

