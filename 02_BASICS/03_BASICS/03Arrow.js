const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this);

    }
    
}
//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()

console.log(this);//output={}empty object jo node mei show ho rha 
//but in browser most global object is WINDOW object

function chai(){
    console.log(this);
}
chai()//fcnt ke andar print krwate to bohot kuch ata hai

//function chai= function(){
//    let username="hitesh"
 //   console.log(this.username);//object ki tarah access nhi kr skte//undefined
//}
//chai()

//------------funt declaration using arrow--------------------

const chai= () =>{
    let username="hitesh"
    console.log(this.username);//undefined//normal fn mei use kr skte this arrow mei nhi
}
chai()


//--------------syntax of ARROW FUCNTION---------------------
//()=>{}

//const addTwo = (num1,num2) =>{
    //return num1+num1                      curly braces used thrn hve to write return
//}

//const addTwo=(num1,num2) => num1+num2

// const addTwo= (num1,num2) => (num1+num2) // return use nhi need          parentesis use no return

//object return syntax
const addTwo = (num1,num2) =>({username:"hitesh"})


const myArray=[2,5,6,7,9]

//myArray.forEach(fucntion(){}),=>()