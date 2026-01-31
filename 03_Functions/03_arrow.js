const user = 
{
    username : "hitesh",
    price : 999,
    welcomeMsg : function()
    {
        console.log(`${this.username} welcome to website`)
    }
    //this refers current context.
}

user.welcomeMsg()
console.log(this) // {}

//earlier javascript was combined with engine(jo ise execute krta tha) , now it is standalone means engine ko separate krdia h --node, dino, bunn, browser ke andar global object h jo voh "window" h aur yaha andar it is empty
 function chai()
 {
    let username="hito"
     console.log(this.username) // undefined
     console.log(this) //within node environment -- this mei kuch toh h
 }
 chai()

//  const chaii = function()
//  {
//     let uusername="cs"
//     console.log(this.uusername)
//  }
//  chaii()

const chaii = ()=>
 {
    let uusername="cs"
    console.log(this.uusername)
    console.log(this)
 } 
 chaii()


// const sum = (num1,num2)=>{
// return num1+num2
// }
// console.log(sum(3,2))

const sum = (a,b)=>(a+b)  //react mei use -- implicit return, return lgana nhi pad rha 
const summ = (a,b)=>({user:"hitooes"}) //() iske andar object daalna padega tb return hoga
