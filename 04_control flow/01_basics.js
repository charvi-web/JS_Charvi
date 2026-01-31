//condition ke basis se ya logic se code run ho , sb run na ho
//if
const isuserLoggedin  = true
if (2==="2") //false in terms of === but true in case of ==
{
    console.log("executed")
}
// < , >, <= ,>=, ==, === (checks datatype as well), !=

const score =200
if (score>100)
{
    let power="fly"
    console.log(`user power : ${power}`)
}
    // console.log(`user power : ${power}`)  out of scope


const balance = 1000
// if (balance>500)  console.log("test"),console.log("ghfj");

if (balance<500)
{
    console.log("less than");
}
else if (balance<900)
{
console.log("less than 750");
}
else {console.log("less than 1200");}





// +++++++++++++++++++++++++++++++++++++++++++++++++++

const userloggedIn = true
const debitCard = true
const loggedInGoogle = false
const userloggedInEmail = true

if (userloggedIn && debitCard)
{
    console.log("allow to buy course.")
}

if (loggedInGoogle || userloggedInEmail)
{
    console.log("log in krne do");
}

