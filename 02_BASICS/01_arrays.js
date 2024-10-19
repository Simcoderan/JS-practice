// sqaure brackets used//elements hota hai andar//  elemts same na ho toh bhi thik hai
// array is object
// arrays in JAVASCRIPT is RESIZABLE

// methods to declare array
const myArr=[0,1,2,3,4,5, true, "simran"]
const myHeros=["shaktimaqn", "naagraj"]
const myArr2=new Array(1,2,3,4)

//accessing array elemnts
 console.log(myArr[0]);// arrayname[index]
//array-copy-operation creates SHALLOW COPIES rather than DEEP COPIES
//SHALLOW COPIES-> of an objects is a copy whose properties share the same references as those of source objects.
//jo bhi chnage krunga original array mei bhi change hoga


 // ARRAY METHODS
  myArr.push(6)
  myArr.push(7)
  myArr.pop()// last value remove

  myArr.unshift(0)//0 add hua starting mei
  myArr.shift()

  console.log(myArr.includes(9));
  console.log(my.Arr.indexOf(9));

  const newArr= myArr.join// output 0,1,2,3,4,5//type change kiya join ne STRING bna diya


  //slice,splice
  A[0,1,2,3,4,5]
//slice[1,2]
B[0,1,2,3,4,5]
//splice C[0,4,5]//array he manupulate ho gaya
[1,2,3]