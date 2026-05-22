// array
const myArr = [0, 1, 2, 3, 4, 5, true, "afeef"]
const myHeros = ["Spider Man", "Iron Man"]

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr2[0]) // 1

// Array Methods
myArr.push(6)
myArr.push("Sohail")
myArr.pop() // remove the last
myArr.unshift(9) // when array is longer than its not good method => [ 9, 0, 1, 2, 3, 4, 5, true, 'afeef', 6 ]
myArr.shift() // [ 0, 1, 2, 3, 4, 5, true, 'afeef', 6 ]
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(9)); //-1 => means not exist

// Adds all the elements of an array into a string, 
// separated by the specified separator string.
const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr); //string

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) // not include end index
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // not include end index
console.log("C ", myArr);
console.log(myn2);


