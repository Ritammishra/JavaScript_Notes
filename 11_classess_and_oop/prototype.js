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

myHeros.ritam()
myHeros.heyRitam()

// heropower.heyRitam()

// inheritance

const Teacher = {
    makeVideo: true
}

const TrachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
}