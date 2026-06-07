const myArr = []

// Constains,  Holey
// SMI (small integer)
// Packed element
// Double (float, sting, function)

let arrTwo = [1, 2, 3, 4, 5]
//PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
//PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
//PACKED_ELEMENTS

arrTwo[10] = 11
//HOLEY_ELEMENTS

console.log(arrTwo); //[ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(arrTwo.length);// 11
console.log(arrTwo[9]); // undefined

// bound check
// hasOwnProperty(arrTwo, 9)
// need next two checks for hole array
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// Continues => SMI > DOUBLE > PACKED
// Holey => H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes, HOLEY_SMI_ELEMENTS
arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(Infinity) // Infinity, NaN => PACKED_DOUBLE_ELEMENTS