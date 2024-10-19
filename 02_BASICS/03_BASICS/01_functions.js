function sayMyname(){
    console.log("simran");
}
// sayMyname()// saymyname= refference , ()= execution 

function addTwoNumber(number1,number2){//(parameters)
    console.log(number1+number2);
}
addTwoNumber(3,4)//(arguments)

//can be stored in a variable
const result=addTwoNumber(3,5)
console.log("RESULT:",result);//output= RESULT=undefined

///CORRECTION////

function addTwoNumber(number1,number2){
    let result= number1+number2
    return result
    //return number 1+ number2
}
// const result= addTwoNumber(3,5)
console.log("RESULT:",result);//output=RESULT=8

//otherway

function loginUserMessage(username){
    if(username===undefined){//!username
        console.log("Please enter a username");
        return
    }                                             //bs yhi return ke baad kuch return nhi hota
    return`${username}just logged in`
}
console.log(loginUserMessage("SIMRAN"))



//******Shopping Cart*************//(add price)
function calCartPrice(...num1){          //rest operator//pack kro 200 400 500 ko r de do
    return num1                          // output= ek array [200,400,500]
}
console.log(calCartPrice(200,400,500))

//function calCartPrice( val1 val2 ...num1){}//output=[500]

const user={
    username:"hitesh",
    price:199   //prices=199- aur neeceh price likha hai to output undefined ayega..
    // check krna padega ki key hai bhi ki nahi ush naam ki//type safety check krni padhti hai//if else use
}
function HandleObject(anyobject){
    console.log(`Username is ${anyobject.username}and price ${anyobject.price}`);

}
HandleObject(user)
// can be written as...
HandleObject({
    username:"sam",
    price:399
})

//ARRAYS can be passed

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]

}
//console.log(returnSecondValue.(myNewArray));//output=400
console.log(returnSecondValue([200,400,500,1000]));

