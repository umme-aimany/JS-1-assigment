var studentNames = [];
var stringArray = ["apple", "banana", "cherry"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
var mixedArray = ["apple", 2, true, "banana", false];
////////////////////////////////
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>List of Available Education Qualifications in Pakistan:</h2><ul>");

for (let i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}

document.write("</ul>");
///////////////////////////////////////////
var studentNames = ["Aiman", "AROMA", "HALEEMA"];
var studentScores = [430, 380, 450];

document.write("<h2>Student Scores:</h2><table>");
document.write("<tr><th>Name</th><th>Score</th><th>Percentage</th></tr>");

for (let i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / 500) * 100;
  document.write("<tr><td>" + studentNames[i] + "</td><td>" + studentScores[i] + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
}

document.write("</table>");
/////////////////////////////////////////
// Initialize an array with color names
var colors = ["red", "green", "blue", "yellow", "orange"];

// Display the array elements in the browser
document.write("<h2>Colors Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array
var  newColorStart = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(newColorStart);

// Display the updated array in the browser
document.write("<h2>Updated Colors Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Ask the user what color he/she wants to add to the end & add that color to the end of the array
let newColorEnd = prompt("Enter a color to add to the end of the array:");
colors.push(newColorEnd);

// Display the updated array in the browser
document.write("<h2>Updated Colors Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Add two more color to the beginning of the array
colors.unshift("purple", "pink");

// Display the updated array in the browser
document.write("<h2>Updated Colors Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Delete the first color in the array
colors.shift();

// Display the updated array in the browser
document.write("<h2>Updated Colors Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Delete the last color in the array
colors.pop();

// Display the updated array in the browser
document.write("<h2>Updated Colors Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index
var colorIndex = prompt("Enter the index where you want to add a color (0-" + (colors.length - 1) + "):");
var colorName = prompt("Enter the name of the color:");
colors.splice(colorIndex, 0, colorName);

// Display the updated array in the browser
document.write("<h2>Updated Colors Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index
var deleteIndex = prompt("Enter the index from where you want to delete colors (0-" + (colors.length - 1) + "):");
var deleteCount = prompt("Enter the number of colors you want to delete:");
colors.splice(deleteIndex, deleteCount);

// Display the updated array in the browser
document.write("<h2>Updated Colors Array:</h2>");
document.write("<p>" + colors.join(", ") + "</p>");

// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var  studentScores = [75, 82, 63, 91, 55];
studentScores.sort();

// Display the sorted array in the browser
document.write("<h2>Student Scores:</h2>");
document.write("<p>" + studentScores.join(", ") + "</p>");


alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");