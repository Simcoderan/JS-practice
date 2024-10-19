//singleton
//const tinderUser=new Object()
const tinderUser={}
tinderUser.id="12345"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);// empty object

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"simran",
            lastname:"singh"

        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// 2 obj ko join krna
//const obj3={obj1,obj2}// wrong syntax
//const obj3= Object.assign({},obj1,obj2)// (target,obj1,2,3...source)//less used
const obj3={...obj1,...obj2}//spread//mostly used
//console.log(obj3);


//*****  DATABASE se jab value atti hai to array ke way mei ati hai  ****//array ke andar bohot sare objects hai

//const users={
   //
   // {
        id:1
        email:"simran@gmail.com"

   // },
    {
        id:2
        email:"h@gmail.com"
    //},


}
//access
users[1].email
console.log(tinderUser);
//give me all keys
console.log(Objects.keys(tinderUser));// output datatype - array// now u can use loop on it
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//array ke andar array//less used

// puch bhi skte hai ki property hai ya nahi
console.log(tinderUser.hasOwnProperty("isLoggedIn"));//true//false


//*****************Destructuring**********//
//-can be od arrays and objects as well

//^^^^^^^^^^^^^^^^ OBJECT-Destructuring ^^^^^^^^^^^^^^^ //

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor//br br nhi likh kr..

const{courseInstructor: instructor}=course// instructor for small name
console.log(instructor);

//*********API***********//
//menucard= API documentation
//JSON(values from backend aur ap kaise ishko likhte hai )
//{                             -object jaisa-
   // "name":"simran",
   // "course":"js"
   // "price":"free"

//}                               -syntax-

//[
    //{},
    //{},
    //`{},
//]                          -array ke format mei bhi atti hai-
