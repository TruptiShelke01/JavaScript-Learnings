var a=5;
{
    let a =10;
    console.log(a)//this value will print cause let is block declare
}


const b ='ram';//constant unchangable
let c="hello";//String let variable is can be changable
let d=78;//integer
let e= true;//boolean
let y= undefined;//undefined
let k=null;//null datatype
console.log(a,b,c,d,e,y,k);
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof y,typeof k);
//type of null is always object


//following object datatype
const item={
    name :"rahul",
    roll : 11
}
console.log(item)
//add item
item.salary="100cr"
console.log(item)
item.salary="200cr"
console.log( typeof item)