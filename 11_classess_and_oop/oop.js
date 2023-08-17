const user = {
    username: "ritam",
    loginCount: 8,
    signedIn: true,

    getUserDeatils: function(){
        // console.log('Got user deatils from database');
        // console.log(`Username: ${this.username}`);
        console.log(this.username);
    }
}

// console.log(user.username);
// console.log(user.getUserDeatils());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);