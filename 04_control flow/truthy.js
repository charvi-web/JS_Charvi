const useremail = "h@gmail.com"
// string ke andar kuch h toh true hi hoga , empty h toh false
if (useremail)
{
    console.log("got user email");
}
else{console.log("don't have user email");}
//falsy values
// false, 0, -0, BigInt 0n, null, undefined, "", NaN 
//truthy values 
// apart from falsy, "0" , 'false' (string ke andar h bhyii) ,"hgihe", " ", [], {}, funtion(){}

let arr = []
if (arr.length===0)
{
    console.log("Array is empty.");
}
let A = {}
if (Object.keys(A).length===0)
{
    console.log("Object is empty.");
}


// Nullish Coalescing Operator (??) : null undefined

let val1; 
// val1 = 5 ?? 10 //5
// console.log(val1) // first value li h isne , agr voh value na mile toh ye krdo
// val1 = null ?? 10 //10
// console.log(val1) //situation handled , mtlb dusri value if null
// val1 = undefined ?? 15
// console.log(val1);   //15
  

val1 = null ?? 10 ?? 15
console.log(val1)  // first value 10 is given

//TERNARY operator
// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80") 
