const  marvelhero=  ["ironman","thor","hulk"]
const dchero =["superman","flash","batman"]
//marvelhero.push(dchero)

//console.log(marvelhero);
//console.log(marvelhero[3][1]);

//const allhero = marvelhero.concat(dchero)
//console.log((allhero));

const allnewhero = [...marvelhero,...dchero]
//console.log(allnewhero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Shubham"))
console.log(Array.from("Shubham"))
console.log(Array.from({name: "Shubham"}))  //interasting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));