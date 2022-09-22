const prompt = require('prompt-sync') ({sigint: true});

//prompting a user for an array
let userArray = JSON.parse(prompt("Enter an array:  "));
console.log(`The first item in your array is: ${userArray[0]}.`);// prints the item in index location 0