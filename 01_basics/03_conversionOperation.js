let score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "afeef" => true


let someNUmber = 33
let strNumber = String(33)
console.log(strNumber);
console.log(typeof strNumber);

// ********** Operations **********

let value = 3
let negValue = -value
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%5);

let str1 = "Hello!"
let str2 = "afeef"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2"); //32
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // prefix
console.log(gameCounter);

gameCounter++; //postfix
console.log(gameCounter);


