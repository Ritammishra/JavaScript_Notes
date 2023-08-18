// let myName = "ritam       "
// let mychannel = " chai       "

// console.log(myName.truelength());

let myHeros = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ritam = function(){
    console.log(`Ritam is present in all object`);
}

Array.prototype.heyRitam = function(){
    console.log(`Ritam says hello`);
}

// heropoer.ritam()

// myHeros.ritam()
// myHeros.heyRitam()

// heropower.heyRitam()

// inheritance

const User = {
    name: "chai",
    emial: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// mordern syntex

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAur Code "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`Trure length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"ritam".trueLength()
"icetea".trueLength()