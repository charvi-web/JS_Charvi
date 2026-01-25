const name = "Charvi"
const repoCnt = 10
console.log(name+repoCnt+" value")
console.log(`hello my name is ${name} and I have ${repoCnt} repos`)

const gameName = new String (`zeldaa`)
console.log(gameName.__proto__) // shows all string methods
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.includes("el"))
console.log(gameName.startsWith("ze"))
console.log(gameName.endsWith("aa"))
console.log(gameName.indexOf("da"))
console.log(gameName.split("e"))

const newString = gameName.substring(0,4); // 4 is not included, -ve is ignored
console.log(newString)

const anotherString = gameName.slice(-4); // counts from last , negative values bhi de skte ho
console.log(gameName.slice(-3,-1))
console.log(anotherString)

console.log(gameName.replace("zel","TEL")) // only first match is replaced
console.log(gameName.split("e"))  