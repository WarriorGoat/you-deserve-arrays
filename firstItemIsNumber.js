const prompt = require('prompt-sync') ({sigint: true});

//prompting a user for an array
let userArray = JSON.parse(prompt("Enter an array:  "));
let test = false

console.log(typeof(userArray[0]));
if (typeof(userArray[0])==="number") {
    test = true;
}
console.log(`The first item in your array [${userArray[0]}] is a number, true or false?`);
console.log(test);