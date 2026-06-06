class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createdId(){
        return "1234"
    }
}

const afeef = new User("Afeef Sohail")
//console.log(afeef.createdId()); error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const me = new Teacher("Me", "Me@gmail.com")
console.log(iphone.createId());