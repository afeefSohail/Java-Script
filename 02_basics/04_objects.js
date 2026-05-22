// emty Object but Singleton Object
const instagramUser = new Object();

//empty Object, but non Signleton Object
const whatsUser = {};

instagramUser.id = "786"
instagramUser.name = "Afeef"
instagramUser.isLoggedIn = false

console.log(instagramUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "afeef",
            lastname: "sohail"
        },
    },
}

console.log(regularUser?.fullname?.userfullname?.firstname );

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj3 = { obj1, obj2 }
//Object.assign(traget, sourse)
const obj4 = Object.assign({}, obj1, obj2, obj3) 
console.log("obj4 => ",obj4);

const obj5 = {...obj1, ...obj2, ...obj3} 
console.log("obj5 => ", obj5);


//DataBase object Values
const users = [
    {
        id: 1, 
        email: "a@gmail.com"
    },
    {
        id: 2, 
        email: "af@gmail.com"
    },
     {
        id: 3, 
        email: "afe@gmail.com"
    },
     {
        id: 4, 
        email: "afee@gmail.com"
    },
    {
        id: 5, 
        email: "afeef@gmail.com"
    }
    
]

users[1].email
console.log(instagramUser);
console.log("Object Keys ",Object.keys(instagramUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log("Object Value ", Object.values(instagramUser)); // [ '786', 'Afeef', false ]
console.log("Object entries ", Object.entries(instagramUser)); // Object entries  [ [ 'id', '786' ], [ 'name', 'Afeef' ], [ 'isLoggedIn', false ] ]
console.log(instagramUser.hasOwnProperty('isLoggedIn')); // true
