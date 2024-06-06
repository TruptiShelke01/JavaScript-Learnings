console.log("here are information about how loops works in javascript");
//If we want to perform some repititive actions in our code we use loops to reduce our code for example printing numbers from 1 to 100 
//There are many types of loops in JS

//For loop
let a =60;
for (let i = 0; i < 100; i++) {
    const element = a + i;
    console.log(element)
    
}


//forin loop
const obj = {
    name:"Trupti",
    Role:"Student",
    company:"Sajivani"
}
//   for (const key in obj) { //for print key only
//         console.log(key)
//      }
 

//if i want to print key as well as element
for (const key in obj) {
    
        const element = obj[key];
        console.log(key,element)
    
}

//forof loop
//it is for array
for (const i of "Trupti") {
    console.log(i)
    
}

//while loop
 let i = 0;
while (i<3) {
    console.log(i)
    i++
    
}

// do while loop not used mostly
let p=10;
do {
    console.log(p)
    p++
} while (p<5);