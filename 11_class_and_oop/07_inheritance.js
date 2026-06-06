class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`User Name is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const me = new Teacher("Afeef", "afeef@gmail.com", "080808")
me.logMe()
me.addCourse()
