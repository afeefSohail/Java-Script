const user = {
    username: "afeef sohail",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

 user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

function tea(){
    let username = "afeef"
    console.log(this.username);
}

tea()

const coffee = function () {
    let username = "afeef sohail"
    console.log(this.username);
}

coffee()

const blackCoffee =  () => {
    let username = "afeef sohail"
    console.log(this);
}


blackCoffee()

//Multi Arrow function need return must with {}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "afeef sohail"})
console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]
myArray.forEach((value) => console.log(value))