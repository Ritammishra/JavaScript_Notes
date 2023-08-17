// if 

// const isUserloggedIn = true
// const temparature  = 41

// if (temparature === 41) {
//     console.log(true);
// }else{
//     console.log("temp is grater than 50");
// }

// < -- less then
// > -- greater ther
// <= -- equal and less then 2 <= 2
// >= -- grater thean and equal
// == -- equal
// != -- not equal
// === --- check value and type 
// !== -- check negative

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");     // implecit scope

// if(balance < 550 ){
//     console.log("less than");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCart = true

const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

// if (userLoggedIn && debitCart && 2 == 2 ) {
//     console.log("Allow to buy access");
// }else{
//     console.log("Not Allow");
// }

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("user loggedIn ");
}else{
    console.log("user not loggedin");
}