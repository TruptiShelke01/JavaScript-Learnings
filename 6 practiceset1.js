//just try to add number to string also try find type of ths string

let a ="ram";
console.log(typeof a);
let c =a+10;
console.log(c)
//output:ram10

//create the constant object and then try to give it a value a

// const obj={
//     name:"trupti"
// }

// console.log(obj)

// let obj=a;
// console.log(obj)
//it gives the syntax error cause we can not asign any value to const variable through out the program.

//try to create dictionary of 5 word-meaning japanese

let dict={
      migi:"right",
      namae:"name",
      nihon:"japan",
      nihongo:"japanese" 
}
for (const key in dict){
// console.log(dict)
const element = dict[key];

console.log(key,element)
}
//output is all key with elements