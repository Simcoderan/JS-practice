//Two ways to declare objects:-
//1-literals
//2-constructor
//**** singleton is made when object is made using constructor ****//Object.create

// Object-Literals

const mySym=Symbol("key1")


const JsUser={
    name:"Simran",//key:values//access by giving keys and values//name is string u can give number boolean etc..
    location:"Jaipur",
    [mySym]:"mykey1",//alwys use square brackets for symbols
    email:"simran@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","wednesday"]
}
//Access-Objects
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

// Change values
JsUser.email="simran@chatgpt.com"
//If you want no body to change
Object,freeze(JsUser)
JsUser.email="simran@chatgpt.com"// No error but  no chnages as well

//fucnt in  object
JsUser.greeting=function(){
    console.log("hello JS  user");
}
JsUser.greetingTwo=function(){
    console.log(`hello JS user,${this.name}`);// reffer any key from object
}

console.log(JsUser.greeting);//undefined
console.log(JsUser.greeting());//correct way
console.log(JsUser.greetingTwo());
