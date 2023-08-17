// singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Ritam",
    "full name": "ritam@gmai.com",
    [mySym]: "mykey1",
    age: 23,
    location: "Kolkata",
    email: "ritam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondey", "Saturday"]
}

// // console.log(JsUser.email);
// // console.log(JsUser["email"]);
// // console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ritam@chat.com"
// Object.freeze(JsUser)
JsUser.email = "ritam@cmicro.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.email}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());