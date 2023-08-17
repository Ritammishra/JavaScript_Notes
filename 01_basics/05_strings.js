const name = "Ritam"
const repoCount = 50

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ritam-rm-raja')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "    ritam   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ritammishra.com/ritam%20mishra"
console.log(url.replace('%20', '-'));

console.log(url.includes('ritam'));

console.log(gameName.split('-'));