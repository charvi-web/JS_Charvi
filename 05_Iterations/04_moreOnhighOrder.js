const myObj = 
{
    js : 'javascript', cpp : 'c++', rb : 'ruby'
}

// forin
for (const key in myObj)
{
    console.log(`${key} : myObj[key]`)
}

const l =["js","cpp","rb","c"]
for (let i in l)
{
    console.log(l[i]);
}

// for of picks up values whereas for in gives u the keys 
const map = new Map()
map.set('IN' , "India")
map.set('USA',"United States Of America")
for (let i in map)
{
    console.log(i) //not iteratable
}


// for each
const coding = ['js','cpp','rb','py']
//call back ka name nhi hota 
coding.forEach(

    function(item){
        console.log(item)
    }
)



coding.forEach(
    (item)=>{console.log(item);}
)

// coding.forEach(()=>{})
    function holla(){console.log("hii")}
coding.forEach(holla) //passing reference of function

const c = [
    {a:'b',a:'q'},{a:'s'},{a:'f',a:'u'}
]
c.forEach(
    (item)=>{console.log(item.a);}
)
// Because each object has the same key repeated (a), JavaScript keeps only the last one.
// So when you print a, you only see q, s, u.