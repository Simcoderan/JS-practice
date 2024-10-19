const name="hitesh"//declare string
const  repoCount=50
//concatinate
console.log(name+repoCount+"value");//not good syntax
// Instead use back ticks-STRING-INTER-POLATION
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//string declaring type 2
const gameName= new String('hiteshhc')// object use kr rhe (new)

//in browser//
//String {'hiteshhc'}0: "h"1: "i"2: "t"3: "e"4: "s"5: "h"6: "h"7: "c"  // keys and words
//length: 8[[Prototype]]: String[[PrimitiveValue]]: "hiteshhc'

 // there are many methods

 console.log(gameName[0]);// h
 console.log(gameName.__proto__);// object {}

 console.log(gameName.length);//8
 //many  other methods can be accesses
 console.log(gameName.toUpperCase());//original value change nahi huyi hai
 console.log(gameName.charAt(2));// kon sa character kish position mei hai//numbers pass krte hai
 console.log(gameName.indexOf('t'));
 //mdndocs//strings method impt for interview
 const newString=gameName.substring(0,4)// (start number,end number)
 console.log(newString);//hite // 0 1 2 3 // last wala include nahi hota (4)

const newString2=gameName.substring(-8,4)//substring obey nahi krta ,ye 0 se he start krta hai.

 const anotherString=gameName.slice(-8,4)
 console.log(anotherString);//output= ite //peeceh se ja kr start kiya

 const newStringOne= "    hitesh    " //space de dete kbhi kbhi
 console.log(newStringOne.trim());//  starting aur ending ke space ko km kr deta hai


 const url ="https://hitesh.com/hitesh%20Singh"//%20 ki jageh space diya hoga toh vo apne ap %20 likh lega
 console.log(url.replace('%20','_'))// kya kojna cahte hai,r kiseh replace krna cahte hai

console.log(url.includes('hitesh'));// url include krta hai ya nahi//true

//based on dash,space mai cahti hu ki array mei convert kr du string ko
console.log(gameName.split('-'));//array aa gaya // output-["hitesh","hc"];


