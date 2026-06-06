class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // when set and get same fields for classes. 
    // It creates error
    // So set the value from constructor 
    // But we create new field for setter and getter

    get email(){
        //return this.email.toUpperCase() //RangeError: Maximum call stack size exceeded
        return this._email.toUpperCase()
    }
    set email(value){
        //this.email = value //RangeError: Maximum call stack size exceeded
        this._email = value
    }

    get password(){
        //return `${this.password}afeef` //RangeError: Maximum call stack size exceeded
        return `${this._password}afeef`
    }

    set password(value){
        //this.password = value //RangeError: Maximum call stack size exceeded
        this._password = value
    }
}

const hitesh = new User("AS@gmail.ai", "abc")
console.log(hitesh.email);