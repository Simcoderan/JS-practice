//Two types of memories
//Stack(primitive) & Heap(non-heap)
// primitive mei jb bhi variable declare krte to ek copy milti hai
//yha refference milta
let myYoutubename="simrancom"

let anothername=myYoutubename//whi value hai simrancom
anothername="dumbcom"

console.log(myYoutubename);//simrancom
console.log(anothername);//dumbcom


let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}//heap

let usertwo=userone//usertwo ko value waps ushi ka refference milega

usertwo.email="simran@google.com"
console.log(userone.email);//simran@google.com
console.log(usertwo.email);//simran@google.com