//Types of datatypes=>> PRIMITIVE Datatypes // NON-PRIMITIVE Datatyps
//diiferentiated on the bases of <<< how it stored and hoe can be accessed>>>>

// PRIMITIVE-7 catogorises <<<< (primitve data types are Call By Values- copy mei changes hongeh inke)>>>>
//String
//Number
//Boolean
//Null
//Undefined
//Symbol//(unique)
//BigInt//(jyada badi number)


//<<FOR SYMBOLS>>//
const id= Symbol('123')// symbol use kiya to alag alag uniquely hoga
const anotherId=Symbol('123')
console.log(id===anotherId);// false

//Quest- javascript is dynamically typed language or statically typed lang????//

// javascript ko kbhi data type nhi btana padhta toh 
//JavaScript is a dynamically typed language, which means that data types of 
//variables are determined by the value they hold at runtime and can change
 //throughout the program as we assign different values to them.//

// REFERENCE Types or  (Non Primitive) <<< inka refference memory mei directly allocate kiya ja skta hai>>
// jitne nhi Non Primitve hai vo functions he bolte hai type of mei
//Arrays// 
const heros=["shaktiman","nagraj"]

//Objects

let myObj= {
   // key values pair//
   name:"simran",
   age:22,
}
//Functions// object function -type

const myFucntion = function(){
    console.log("hello world");
}



