//!!!! Strings are IMMUTABLE

let n="Harry";
console.log(typeof n)
console.log(n[0]);
console.log(n[1]);
console.log(n[2]);
console.log(n[3]);
console.log(n[4]);
console.log(n[5]);//it gives undefined cause nothing at index

//for check length
console.log(n.length)

//new way to print variable

let t="trupti"
let f= "rahul"

console.log("My name is " + t +  " my friend name is  " + f)//its happening way

//new way to ease programming
console.log(`my name is ${t} and my freind name is ${f}`)
//` this sybol is above tab below esc (backtick)


// also in rapel i want to print "roha"an" it willl n ot recongnizw thwn two ways to print
//-->`"roha"an"`
//-->"roha\"an"

let v ="Vimalbai"
console.log(v.toLowerCase())//as it function so have to give paranthesis
console.log(v.toUpperCase())
console.log(v.toLowerCase())
console.log(v.length)//it is a property

//slicing

console.log(v.slice(2,4))//include 2 exclude 4
console.log(v.slice(2))//2 to end
console.log(v.slice(2,6))

let g="Shamsh"
console.log(g.replace("sh" , "kh"))//first  Sh second is sh for replace

let r ="ramram"
console.log(r.replace("ram" , "sham"))
//if two same them replaces first only

console.log(r.concat(g , "rounak"))

console.log(r.indexOf("m"))
console.log(g.charAt(3))
console.log(g.startsWith("s"))

