const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","batman","flash"]

//method1

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);// array ke andar array aa gaya

//method2

const allheroes= marvel_heroes.concat(dc_heroes)
console.log(allheroes);//naya array banata hai

//method3-spread
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);// output=ek ek alag ho jayega


const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);// ek he array mei sb alag alag

//whether to ask it is array or not
console.log(Array.isArray("simran"));//false
console.log(Array.from("simran"));//['s","i","m",....]
console.log(Array.from({name:"simran"}));//interesting//output=[]empty array 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
