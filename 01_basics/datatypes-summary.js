/* 
- Primitive type (value type): 
    1. call by value, copy their value
    types: String, Number, Boolean, null, undefiend, Symbole, BigInt

- Non Primitive Type (Reference type):
    1. Array, Object, Functions

- Dynamic Language => Type Script (Static Language)

- Stack (Primitive), Heap (Non-Primitive)
*/

const id = Symbol('123')
const uuId = Symbol('123')
console.log(id === uuId); // false 