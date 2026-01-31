//immediately invoked function expressions -- the functions that need to be executed on the spot, suppose we want to connect database as soon as function starts, and also global declarations pollutes others, so that's why
(function chai()
{
    console.log("DB Connected!")
})(); //; reqd. to end code that's invoked

((n) => {
    console.log(`Hello ${n}`)
})("Charvi");