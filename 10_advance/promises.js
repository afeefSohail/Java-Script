const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2 ...");
        resolve()
    }, 1000)
}).then(() => {
    console.log('Async 2 resolved!');

})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ username: "Afeef Sohail", email: "afeef786@gmail.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Afeef", password: "2255" })
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        return user.username
    }).then((userName) => {
        console.log(userName);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The prmoise is either resolved or rejected"))


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "15151" })
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log("getAllUsers => ",data);
//     } catch (error) {
//         console.log("getAllUsers Error:", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
    return data.map((user) => user.address);
})
.then((address) => console.log(address))
.catch((error) => console.log(error))