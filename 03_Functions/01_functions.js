function greeting ()
{
    console.log("HOLLA :) ")
}

console.log(greeting())

function add2nos(a,b)
{
    return a+b
}
const sum = add2nos(2,3)
console.log(sum)

function loginUser(username)
{
    return `${username} just logged in.`
}

console.log(loginUser("Charvi"))


function calCartPrice(...num1)
{
    return num1
}

console.log(calCartPrice(11,34,23,456,65))

const user = {
    username : "Nishi",
    price : "1k"
}


function handleObject(anyObject)
{
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`)
}


