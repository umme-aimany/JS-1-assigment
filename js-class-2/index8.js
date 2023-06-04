alert("this is chapter 12-13 assigment")
// Get the input character from user
var  input = prompt("Enter a character:");

// Check if the input is a number
if (!isNaN(input)) {
  alert(`${input} is a number.`);
}

// Check if the input is an uppercase letter
else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
  alert(`${input} is an uppercase letter.`);
}

// Check if the input is a lowercase letter
else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
    alert(`${input} is a lowercase letter.`);}

// If none of the above conditions are met, the input is not a number or letter
else {
    alert(`${input} is not a number or letter.`);
}
/////////////////////////////////////////////////////////////////////////////
// Get the input from user
const num1 = parseInt(prompt("Enter first integer:"));
const num2 = parseInt(prompt("Enter second integer:"));

// Compare the two integers and display the larger one
if (num1 > num2) {
  alert(`${num1} is larger than ${num2}.`);
} else if (num2 > num1) {
  alert(`${num2} is larger than ${num1}.`);
} else {
  alert(`${num1} and ${num2} are equal.`);
}
///////////////////////////////////////////

// Get the input from user
var  number = parseInt(prompt("Enter a number:"));
// Check if the number is positive, negative, or zero
if (number > 0) {
  alert(`${number} is positive.`);
} else if (number < 0) {
  alert(`${number} is negative.`);
} else {
alert(`${number} is zero.`);
}
/////////////////////
// Get the input from user
var  character = prompt("Enter a character:");

// Define an array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Check if the character is a vowel
if (vowels.includes(character.toLowerCase())) {
  alert(`${character} is a vowel.`);
} else {
  alert(`${character} is not a vowel.`);
}
//////////////////////////////////////////////////////
// Store the correct password in a variable
var correctPassword = "myPassword";

// Ask the user to enter their password
var  userPassword = prompt("Enter your password:");

// Check if the user has entered a password
if (userPassword === "") {
  alert("Please enter your password.");
} else {
  // Check if both passwords are the same
  if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
  } else {
    alert("Incorrect password.");
  }
}
//////////////////////////////////////////////////////////
var greeting=prompt("whats time in your country")
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
//////////////////////////////////////////////////////////////
// Get the input from user
const time24 = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));

// Initialize variables
let time12;
let suffix;

// Convert the time to 12-hour format
if (time24 >= 0 && time24 <= 2359) {
  if (time24 === 0) {
    time12 = 12;
    suffix = "am";
  } else if (time24 <= 1159) {
    time12 = time24;
    suffix = "am";
  } else if (time24 === 1200) {
    time12 = 12;
    suffix = "pm";
  } else if (time24 >= 1201 && time24 <= 2359) {
    time12 = time24 - 1200;
    suffix = "pm";
  }
  console.log(`The time in 12-hour clock format is ${time12}${suffix}.`);
} else {
  console.log("Invalid input.");
}





