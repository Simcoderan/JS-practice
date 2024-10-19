//let a =10//GLOBAL SCOPE
//const b=20
//var c=300//30 dega print hokr
let a=300

if (true){// BLOCK SCOPE
    let a =10
    const b=20
    //var c=30
    console.log("INNER=" ,a);//output=10
}

console.log(a);//output= 300      -let wala kyuki if-else se bahar aa gye
//console.log(b);//unavailable
//console.log(c);//scope ke bahar print ho gaya jabki upar he ktm ho jana  tah ishko

//windows,node ke andar scope alag hota hai
//(browswer wala r yha node ke through jo scope dekhte hai vo alag hai)


/******************NESTED SCOPE**************/
function one(){
    const Username="simran"

    function two(){
        const website="youtube"
        console.log(Username);// child hai toh parent one ko access kr skta hai
    }
    //console.log(website);//error
     //two()//never execute
     //jab only two() execute krenge toh //output= simran
    
}
one()

//****if else*******//

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        //console.log(username+website);
    }
    //console.log(website);//error
}
//console.log(username);//error

//+++++++++++++++++++++interesting+++++++++++++++++++++++
addone(5)//no error
function addone(num){
    return num+1
}



addtwo(5)//kaise declare krte to error ata hai //error hai yha //hosting
//declaration se pehle access kr rha hu
const addtwo=function(num){
    return num+2
}
addtwo(5)