function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoBumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoBumber(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1+ number2
}

const result =  addTwoBumber(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "Raja"){
    if (!username) {
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ritam"))
// console.log(loginUserMessage("Ritam"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 600, 800, 1000));

const user = {
    username: "Ritam",
    prices: 199
}
// price name chane
function handelobj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelobj(user)
handelobj({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 500, 700]));