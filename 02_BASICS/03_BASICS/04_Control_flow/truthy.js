//falsy values
//false,0,-0,BigInt 0n , "",null,undefined,NaN


//truthy values
//"0","false"," ",[],{object},function(){}

//---how to check string is empty?
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");

}

//NULLISH COALESCING OPERATOR(??) -------null and undefined
let val1;
val1=5 ?? 10
console.log(val1);//output=5
val1=null ?? 10
console.log(val1);//10
val1= undefined ?? 15 //15

//ternary operator
//condition ? true: false
const iceTeaPrice=100
iceTeaPrice>=80? console.log("less"): console.log("more than");