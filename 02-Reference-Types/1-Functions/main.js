// A re-usible code || Code in demond


function greet() {
    console.log('Hello Dear');
}
greet() // Calling a function




// Function inside  a vairable 
let userName = 'Noor ul hussain'
let greetUser = function () {
    return `Hi ${userName}`
}

const result = greetUser()
console.log(result)