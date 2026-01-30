// var c = 300
let a = 300
if (true)
{
let a = 10
const b = 20
console.log(`INNER a : ${a}`)
// var c = 30  
}


// for(let i=0;i<Array.length();i++)
// {
//     const element = arr[i]
// }
//block ke andar likh rhe ho block scope , block ke bahar toh global scope
//global scope is applicable inside block but not vice-versa


// {}  -- scopes

// console.log(a)
// console.log(b)
// console.log(c)  

//NESTED SCOPES
// function one()
// {
//     const username = "Charvi"
//     function two()
//     {
//         const website = youtube
//         console.log(username)
//     }
//     console.log(website)
//     two()

// }
// one()


if (true)
{
    const username = "hitesh"
    if (username=="hitesh")
    {
        const website = " youtube"
        // console.log(username+website)
    }
    // console.log(website)
}

console.log(username)

console.log(addone(5))

function addone(n)
{
    return n+1
}

console.log(add2(2))
const add2 = function(n)
    {
        return n+2
    }


    //declaration matters hoisting --kis tarah se declare kr rhe h store kr rhe h 