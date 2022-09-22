const prompt = require('prompt-sync') ({sigint: true});

//prompting a user for an array
let userArray = JSON.parse(prompt("Enter an array:  "));

let length1 = userArray.length
let test = false

if (length1 >= 10) {
    test = true;
}
console.log("Your array conatins at least 10 characters, true or false?");
console.log(test);
