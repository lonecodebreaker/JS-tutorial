
// Its basically CREATING PROMISE and assigning it to a variable
const PromiseOne = new Promise(function (resolve, reject) {
    // Do an asynchronus task 
    // DB calls , cryptography calls , network calls
    setTimeout(function () {
        console.log("Asynchronous task is complete");
        resolve()
    }, 1000)
})

// here we dont know what is resolve or reject is doing 
// next step is CONSUMING PROMISE and its done by then()
// then has direct connection with resolve 

PromiseOne.then(function () {
    console.log("promise consumed");
})

// without reference variable Promise
new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Asynchronous task 2 ");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Asynchronous 2 resolved");

})


//passing parameter inside resolve
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Shubham Ratan", email: "Shubham@best.com" })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})


// Knowing  reject , catch and finially 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Shubham Ratan", password: "123" })
        }
        else {
            reject("ERROR : Something went erong")
        }
    }, 1000)
})

// syntax is =>     promiseFour.then().catch()

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => {
    console.log("Promise resolved or rejected");
})


// knowing how async/await handles promise

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "123" })
        }
        else {
            reject("ERROR : JS went erong")
        }
    }, 1000)
})

async function promiseFiveConsume(){
     try {
         const response = await promiseFive
         console.log(response);
     } catch (error) {
         console.log(error);
     }
}
promiseFiveConsume()




// +++++++++++++++++++++++++++++++++++++++++++++++++++ Real World Example +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++ Real World Example +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++ Real World Example +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


fetch('https://api.github.com/users/lonecodebreaker')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data); 
})
.catch((error) => {
     console.log('E :', error);
})
