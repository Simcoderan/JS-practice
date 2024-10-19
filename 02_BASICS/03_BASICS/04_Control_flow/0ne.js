//if

if (condition){}   //---syntax-----

if(true){
    //then andar ka run hoga
}

// comparision operator = < ,> ,<= ,>= ,== ,!= ,===, !==

//const temp=40
//if(temp===40   ){
 //   console.log( "less than 50");
//}else{
   // console.log("temo greater than 50");
//}
//console.log (executed);


const score=200          //----------block scope----------

if(score>100){
    const power="fly"
    console.log(`user power:${power}`);
}
// console.log(`user power:${power}`); // not accessable


const balance=1000

if(balance>500) console.log("test");   //-------------short hand notation---------


// NESTING

if(balance < 500){
    console.log("less than 500");

} 
else if (balance<750){
    console.log("less than 750");


}
else{
    console.log("less than 1200");
}



//example-2

const userLoggedIn=true
const DebitCard= true
const LoggedInFromEmail=true
const LoggedInFromGoogle= false

if(userLoggedIn &&  DebitCard){
    console.log("allowwed to buy");
}
if(LoggedInFromEmail || LoggedInFromGoogle){   // or ya to vo ya dusra
    console.log("user logged in");
       
}



