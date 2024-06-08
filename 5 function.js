//lets see the function a block of code have to one time and can be executed again again!



function mine(name,age) {
    console.log("my name is " + name)
    console.log("my age is " + age)
    
}
//for print string + to print int ,
mine("trups",56)
mine("rohan",78)

//now i want to save my output in an variable and print this

function add(p,q) {
    // console.log(a+b)
    return p+q
    //by return we are able to store in variable sum
}
sum= add(2,4)
console.log("addition is " ,  sum)

//there is also one more type of function that is arrow function

const fun1 = (k) =>{
    console.log("i am an arrow funtion" , k)
    
}

fun1(43)