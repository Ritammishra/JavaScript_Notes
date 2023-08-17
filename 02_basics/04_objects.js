// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123456"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ritam",
            lastname: "Mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)  // object assign


const obj3 = {...obj1, ...obj2, ...obj4} 
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "ritam@gmail.co"
    },
    {
        id: 2,
        email: "ritam@gmail.co"
    },
    {
        id: 3,
        email: "ritam@gmail.co"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructure: "Hitesh"
}

// course.courseInstructure

const {courseInstructure: teacher} = course

console.log(teacher);

// {
//     "name": "titam",
//     "coursename": "js in Hindi",
// }

[
    {},
    {},
    {}
]