console.log("Here is code about if,else,else if ladder in JS");
//semicolons are optional in javasctript
let age = 45;

if(age>18){
    console.log("you can drive")

}
else{
    console.log("you can not drive ")
}
//semocolons are optional in js
let b = 90;
if(b>=90){
    console.log("O grade" ,b)
}
else if(b>=80){
    console.log("A+")
}
else if(b>=70){
    console.log("B+")
}
else{
    console.log("fail")
}

//ternary operator instead of if else
let n=90;
let m=89;
l=m<n ?(m+n):(m-n)
console.log(l)

console.log("the end")