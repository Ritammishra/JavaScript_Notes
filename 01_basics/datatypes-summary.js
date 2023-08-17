// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = false
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 44942164946674n

// console.log(typeof bigNumber);

// Reference (Non primitive) 

// Array, Objects, Functions

const heros= ["shaktiman", "naagraj", "doga"]

let myobj = {
    name: "Ritam",
    age: 23,
}

let myfunc = function () {
    console.log("Hello world");
}

/* 
Return type of Datatype in javascript

1. Primitive Datatypes

Number => number
String => string
Boolean => boolen
null => object
undefiend => undefiend
Symbol => symbol
Bigint => bigint

2. Non-primitive Datatypes

Arrays => object
Function => function
Object => object
*/

// ****************************************************************************************************

// Stack (Primitive), Heap (Non-primitive) Memory

let myYoutubename = "chaiaurcode"

let anothername = myYoutubename
anothername = "Youtube"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user&google.com",
    upi: "user@123"
}

let userTwo = userOne

userTwo.email = "ritam@google.com"

console.log(userOne.email);
console.log(userTwo.email);
