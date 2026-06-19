'use strict';
console.log("Node.js is working!");

//alert() doesn't exist in Node.js — because alert() is a browser-only function. 
// It runs inside a web page, not in Node.js.
//alert("I'm JavaScript!");

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

console.log($ + _); // 3

let message = "hello";
message = "Hey, Afeef";
console.debug(message);

// it doesn’t change after the assignment.
const myBirthday = '18.04.1982';

console.log(typeof undefined); // "undefined"

console.log(typeof 0); // "number"

console.log(typeof 10n); // "bigint"

console.log(typeof true) // "boolean"

console.log(typeof 'foo') // "string"

console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math) // "object"  (1)

//For null returns "object" – this is an error in the language, it’s not actually an object.
console.log(typeof null) // "object"  (2)

console.log(typeof alert) // "function"  (3)

//concadication of string
let name = "Ilya";

alert( 'hello ${1}' ); // ?

alert( 'hello ${"name"}' ); // ?

alert( 'hello ${name}' ); // ?

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

let i = 0;
for (; i < 3;) {
  alert( i++ );
}

for (;;) {
  // repeats without limits
}

for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');

// -:Function Expression:- 
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3