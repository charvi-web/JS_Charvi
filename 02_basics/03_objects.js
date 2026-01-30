// singleton--constructor--apne tarah ka ek hi object h
// Object.create

//literal -- multiple, singleton nhi bnta

const mySym = Symbol("key1")

const user = {
    [mySym]: "mykey1",
    name: "Charvi",
    "full name" : "Charvi Singh"
    , age:20, location:"ggn", email:"cs@google.com",
    LastloggdIn : ["Tuesday","Wednesday"]

}

console.log(user.email)
console.log(user["email"])
console.log(user["full name"])
console.log(user[mySym])
console.log(typeof user[mySym]) //string
console.log(typeof mySym)

user.email="csnitkkr.ac.in"
// Object.freeze(user)
console.log(user)
user.greeting=function()
{
    console.log("HOLLA")
}
user.greeting2=function()
{
    console.log(`hello ${this.name}`)
}
console.log(user.greeting())
console.log(user.greeting2())

