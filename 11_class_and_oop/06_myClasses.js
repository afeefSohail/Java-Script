class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const afeef = new User("afeef", "afeef@gmail.com", "12345")
console.log(afeef.encryptPassword());
console.log(afeef.changeUsername());

// behind the scene working of classes
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const shahab = new User("Shahab", "Shahab@gmail.com", "12345")

console.log(shahab.encryptPassword());
console.log(shahab.changeUsername());