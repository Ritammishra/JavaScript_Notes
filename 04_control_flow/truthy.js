const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// }else {
//     console.log("Dont have user email");
// }

// falsy value

// false value  => false, 0, -0, bigint 0n, "", null, undefiend, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("plear enter name");
// }

const emptyobj = {}

// if (Object.keys(emptyobj).length === 0) {
//     console.log("object is empty");
// }

// Nullish colescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");  


