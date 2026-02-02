//reduce
const myNums = [1,2,3]

const mytotal = myNums.reduce(

    (acc,curr)=>{
        console.log(`acc : ${acc},   curr : ${curr}`)
        return acc+curr},0//initial value 
)
console.log(mytotal)

const shoppingCart = [
    {itemname:"js course", price:2000},
    {itemname:"python course", price:5600},
    {itemname:"ds course", price:3000},
    {itemname:"c course", price:2033}]

const p = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(p)