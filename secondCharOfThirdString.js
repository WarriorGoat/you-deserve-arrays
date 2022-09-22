const prompt = require('prompt-sync') ({sigint: true});

//prompting a user for an array
let userArray = JSON.parse(prompt("Enter an array:  "));


if (typeof(userArray[0])==="string") {
    console.log(`The second character in the third item in your array is [ ${userArray[2][1]} ].`);;
} else {
    console.log("Error!!");
    console.log("The third item in your array is not a string.");
}
