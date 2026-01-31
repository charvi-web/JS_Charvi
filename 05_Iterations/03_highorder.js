//for of 

// ["","",""]  strings within array 
// [{},{},{}]  objects 


const arr = [1,2,3,4,5]
for (const num of arr)
{
console.log(num);
}

const greetings = "Hello world !"
for (let c of greetings)
{
    console.log(c)
}

//MAPS -- order is there ,key value, unique 
const map = new Map()
map.set('IN' , "India")
map.set('USA',"United States Of America")
console.log(map);

for (const [key,value] of map)
{
    console.log(key, ':-' , value);
}

for (let j of map)
{
    console.log(j);  //cmplete array ke jaise 
}

const myObj = {
    'game1' : 'nfs', 'game2' : candycrush
}

// for (const [key,value] of myObj)
// {
//     console.log(key, ':-' , value);  //not iteratable
// }