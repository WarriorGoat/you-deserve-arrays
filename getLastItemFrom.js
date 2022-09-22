const prompt = require('prompt-sync') ({sigint: true});

//prompting a user for an array
let userArray = JSON.parse(prompt("Enter an array:  "));

console.log(`The last item in your array is: ${userArray[userArray.length - 1]}`); // caluclates the length of the array, then prints the last item in the array.