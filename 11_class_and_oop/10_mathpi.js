const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const Burger = {
    name: 'Smoke Beast',
    price: 800,
    isAvailable: true,

    orderChai: function(){
        console.log("Burger nahi bana");
    }
}

console.log(Object.getOwnPropertyDescriptor(Burger, "name"));

Object.defineProperty(Burger, 'name', {
    writable: false,
    // I can stop iteration of object property by enumerable false
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(Burger, "name"));

// To make Object Iteratable
for (let [key, value] of Object.entries(Burger)) {

    // we dont need object functions in iteration of Object
    if (typeof value !== 'function') { 
        
        console.log(`${key} : ${value}`);
    }
} 