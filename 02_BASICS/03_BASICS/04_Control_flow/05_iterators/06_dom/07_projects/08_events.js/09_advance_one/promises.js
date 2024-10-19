const promiseONE = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseONE.then(function(){
    console.log('Promise consumed');

})

// can be written as...

new promiseONE(function(resolve,reject){
    setTimeout(function(){
        console.log('async task2');
        resolve()

    },1000)
}).then(function(){
    console.log('async 2 resolved');

})

const  promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email: "chai@example.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user);

})


const promiseFour=new promiseONE(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"simran",password:"123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },2000)
})
 promiseFour
 .then((user)=>{
    console.log(user);
    return user.username

})
.then((username)=>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
}) 
.finally(()=> console.log("the promise is either resolved or rejected"))


const promiseFive= new promiseONE(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"JAVASCRIPT",password:"123"})
        }else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}
consumePromiseFive()//doesnt handle error

async function consumePromiseFive(){
    try {
        const response = await promiseFive
         console.log(response);
 }
 catch(error){
    console.log(error);
 }
}
consumePromiseFive()

async function getAllUsers(){
     try {
        const response = await fetch("url")
     const data =  await response.json()
     console.log(data);
}
        
      catch (error) {
        console.log("E:",error);
        
     }
    }
getAllUsers()


fetch('url')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))


 
