// singleton
//Object.create

const id = Symbol("uuid")

//object literals
//JS Object work as key vs value
const User = {
    [id]: "id",
    name : "Afeef",
    "full name": "Afeef Sohail",
    age: 18,
    location: "Lahore",
    email: "afeef@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

console.log(User.email);
console.log(User["email"]);
console.log(User["full name"]);
console.log(User[id]);


User.email = "afeef.sohail@gmail.com"
console.log(User.email);

// Object.freeze(User) // no change except after this
// User.email = "afeef.sohail@zoho.com"
// console.log(User);

//Object function
User.greetings = function() {
    console.log("Hello my Users");
    
}

console.log(User.greetings()); //return function 
console.log(User.greetings); // return function reference

User.greetingsTwo = function() {
    console.log(`Hellow users, ${this.name}`);
}

console.log(User.greetingsTwo()); //return function 
console.log(User.greetingsTwo); // return function reference

/* +++++++++++++++ Summary +++++++++++++++++++++
Object variable can be defiend out of Object scop

*/