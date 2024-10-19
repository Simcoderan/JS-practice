// Immediately Invoked Function Expressions (IIFE)
//global scope ke pollution avoid krne ke liye,fucntion ko immediately call krne ke liye

// normal fucntion

function chai(){
    console.log(`DB CONNECTED`);

}
chai()

//syntax-using-example

(function chai(){                          //named IIFE
    console.log(`DB CONNECTED`);

})();                    //2 IIFE sath likhne ke liye beech mei ";" use kr do

//()()   ----syntax-----

// using --arrow function----
( ()  =>  {

    console.log(`DB CONNECTED TWO  `);

} ) ()


( (name)  =>  {

    console.log(`DB CONNECTED TWO  ${name} `);

} ) ("simran")



