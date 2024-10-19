let  score = 33
//type= number
let score1="33"
//type=string becz of semicolon

//const {score} = req.body
//frondend se request lete hai kyuki hum backend pr kaam kr rhe hai to humeh type nhi pata hota
console.log(typeof score);//type 1
console.log(typeof(score));//type 2 for seeing type

let valueInNumber=Number//capital class base
//let valueInNumber=Number(score) // number mei convert ho gya
console.log(typeof valueInNumber);//output=number
//wht if it was let score ="33abd"//then also output= number

console.log(valueInNumber);//but if one valueInNumber then we get <NaN> (SPECIAL TYpe)

 let score2=null
//output=0
 let score3 =undefined
 //output=NaN
 let score4=true
 //output=1; false=0


 let isLoggedIn=1
 let booleanisLoggedIn=Boolean(isLoggedIn)
 console.log(booleanisLoggedIn);
 //output=    <true>

 // let isLoggedIn=""
 //let booleanisLoggedIn=boolean(isLoggedIn)
 //console.log(booleanIsLoggedIn);
//output=  <false>

//"sim"=>true


let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
// output=33
console.log(typeof stringNumber);
//output=string


//***********************Operations***********************//
let value=3
let negValue= -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);//power
//console.log(2/3);//divide
//console.log(2%3);//remainder
let str7="hello"
let str9=" simran"
let str0= str7+str9
console.log(str0);

console.log("1"+2);//output=12
console.log(1+"2");//output=12
console.log("1"+2+2);//output=122
console.log(1+2+"2");//output=32//aise likhna shi nahi 

console.log((3+4)*5%4); //brackets use kro clean lagega

console.log(+true);//output=1 , but true+ =>error


let num1,num2,num3
num1=num2=num3=2+2 //confusing way

let gameCounter=100
gameCounter++// prefix and postfix operator ( can be ++ gameCounter)but same output
console.log(gameCounter);//101 output


// study more about TYPE CONVERSIONS





