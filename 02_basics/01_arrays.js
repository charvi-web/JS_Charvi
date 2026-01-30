const myArr = [0,1,"Charvi",3,true,5] 
//resizable , create shallow copies--same reference point
console.log(myArr)
myArr.push(6)
myArr.unshift(9)
console.log(myArr)
//shift remove starting elwment just like unshifts adds at beginning
console.log(myArr.includes(9))


//join : changes to string
const newArr = myArr.join()
console.log(newArr)  

//slice splice
const arr = [0,1,2,3,4,5]
console.log("A : ",arr)

const myn1 = arr.slice(1,3)
console.log(myn1)
console.log("B : ",arr)

const myn2 = arr.splice(1,3)
console.log(myn2)
console.log("C : ",arr) //splice is manipulating the original array.