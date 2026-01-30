const marvel_heroes = ["thor", "ironman","spiderman"]
const dc_heroes = ["superman", "flash","batsman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][2])

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)

const allh= [...marvel_heroes, ...dc_heroes]
console.log(allh)

const n = [1,2,3,[4,5],[5,6,[7,8]]]
console.log(n.flat(Infinity))

console.log(Array.isArray("Charvi"))  //kya voh array h ya nhi
console.log(Array.from("Charvi"))    //convert to array
console.log(Array.from({name:"Charvi"}))  //nhi kr paya toh empty return krega


console.log(Array.of(1,2,3))


