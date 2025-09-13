// Singleton object example (only one instance)
// const tinderUser = new Object() → would also create singleton object

// Creating a Symbol (unique key)
const mySym = Symbol("key1")

// Defining an object with properties
const jsuser = {
    name: "Atrij",
    age: 20,
    [mySym]: "ghosh", // using Symbol as a key
    location: "jaipur",
    email: "atrij10@gmail.com"
}

// Accessing object properties
console.log(jsuser.email)      // normal property access
console.log(jsuser[mySym])     // accessing Symbol key

// Modifying object property
jsuser.email = "ghosh@123.com"

// Freezing object → no modification allowed after this
Object.freeze(jsuser)

// This change will NOT happen because object is frozen
jsuser.email = "atrijghosh.gamil.com"
console.log(jsuser)

// Adding a function (method) to the object
jsuser.greeting = function(){
    console.log("hello js user");
}

// Typo in property name → undefined
console.log(jsuser.gretting); // should be jsuser.greeting()

// ---------------------------------------

// Creating empty object (non-singleton)
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// ---------------------------------------

// Nested objects example
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing nested object property
// console.log(regularUser.fullname.userfullname.firstname);

// ---------------------------------------

// Object merging examples
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Spread operator to merge objects
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// ---------------------------------------

// Array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

// Accessing second user's email
users[1].email

// console.log(Object.keys(tinderUser));   // get keys
// console.log(Object.values(tinderUser)); // get values
// console.log(Object.entries(tinderUser));// key-value pairs

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check property

// ---------------------------------------

// Object destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructure with alias
const {courseInstructor: instructor} = course

console.log(instructor); // output → hitesh

// ---------------------------------------

// Example JSON format (like API response)
/*
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/

// Array of empty objects (example structure)
[
    {},
    {},
    {}
]

