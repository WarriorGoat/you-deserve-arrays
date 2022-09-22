const prompt = require('prompt-sync') ({sigint: true});

//prompting a user for an array
let userArray = JSON.parse(prompt("Enter an array:  "));

let length1 = userArray.length

if (length1 <= 4) {
    console.log("There are fewer then 4 items in your array.");
    console.log(`The final item in your array is ${userArray[length1-1]}`);
}else {
    console.log(`There are ${length1} items in your array.`);
    console.log(`The third index in your array contains ${userArray[3]}`);
}