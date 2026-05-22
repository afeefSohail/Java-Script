 function sayMyName() {
     console.log("AFEEF SOHAIL")
 }

 function addTwoNumbers(number1, number2) { 
    let result = (number1 + number2);
    return result
 }
 const result = addTwoNumbers(3, 5); // 7

function loginUserMsg(username = "Shahab") {
    //(username === undefined)
    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMsg("Afeef Sohail")); //Afeef Sohail just logged in
console.log(loginUserMsg()); // undefined just logged in

//... Rest Operator with parameter in function
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500)); // [ 200, 400, 500 ]

function calculateCartPrice(val, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500)); // [ 500 ]

// +++++++++++++ handle object functions
const user = {
    username: "afeef sohail",
    price: 999
}

function handleObject(user) {
    console.log(`Username is ${user.username} and price is ${user.price}`);   
}

handleObject(user) // Username is afeef sohail and price is 999

handleObject({
    username: "Izhan", 
    price: 399
}) // Username is Izhan and price is 399

const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 100, 600]));