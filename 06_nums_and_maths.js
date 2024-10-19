const score=400// automatically kudhko number detect kr liya
console.log(score);
const balance= new Number(100)//prototype dekho browser mei
console.log(balance);// specifically cast kiya hai ki number hai 400

console.log(balance.toString());//output=100//but ab string ban gaya hai
console.log(balance.toString().length);//output=3
console.log(balance.toFixed(2));//output=100.00

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3));//output=23.9
 //const otherNumber=123.8966
 //console.log(otherNumber.toPrecision(3));//output=124
 //number=1123.89585
 //output=1.123e+3//EXPONENTIAL

 const hundreds=100000;
 console.log(hundreds.toLocaleString('en-IN'));
 
 //maxvalue & minvalue is also availqable

 //+++++++++++++++++++ Maths ++++++++++++++++++++++++++++

 console.log(Math);//object hai
 console.log(Maths.abs(-4));//absolute value//output=4
 console.log(Math.round(4.3));//output=4
 //not used much round is used mostly
 console.log(Math.ceil(4.2));//top value choose krunga//OUTPUT=5
 console.log(Math.floor(4.2));//floor value lega//Output=4
 console.log(Math.min(4,3,5,6));
 console.log(Math.max(4,4,6,5));


 console.log(Math.random());// always 0 and 1 ke beech value
 // if we make dice game then range will be btwn 1-6
 console.log((Math.random()*10) +1);
 console.log(Math.floor(Math.random()*10)+1);

//setting a limit range
 const min=10
 const max =20

 console.log(math.floor (Math.random()*(max-min+1))+min)


