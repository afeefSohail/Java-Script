function SetUsername(username) {
    //complex DB calls
    this.username = username
}

function createUser(username, email, password) {
    // pass the global context of SetUsername
    // to hold the reference of the function
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const afeef = new createUser("Afeef Sohail", "afeef@gmail.com", "12345")
console.log(afeef);

/* +++++++ Summary +++++++ 
When we divide the complex logic in diff functions than we can use this. 
Pass the global context of SetUsername to hold the reference of the function.
*/