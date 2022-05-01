// Question Number 01 //
// salution //

var str1 = "Today is";
var str2 = "      a beautiful day     ";
var str3 = " In Hawaii.     ";
console.log(` ${str1} ${str2} ${str3}`);

// Question Number 02//
// salution //

const enteredAlphabet = "1";

if (enteredAlphabet === "A") {
  console.log(enteredAlphabet + " is Vowel");
} else if (enteredAlphabet === "E") {
  console.log(enteredAlphabet + " is Vowel");
} else if (enteredAlphabet === "I") {
  console.log(enteredAlphabet + " is Vowel");
} else if (enteredAlphabet === "O") {
  console.log(enteredAlphabet + " is Vowel");
} else if (enteredAlphabet === "U") {
  console.log(enteredAlphabet + " is Vowel");
} else if (enteredAlphabet === "a") {
  console.log(enteredAlphabet + " is Vowel");
} else if (enteredAlphabet === "e") {
  console.log(enteredAlphabet + " is Vowel");
} else if (enteredAlphabet === "i") {
  console.log(enteredAlphabet + " is Vowel");
} else if (enteredAlphabet === "o") {
  console.log(enteredAlphabet + " is Vowel");
} else if (enteredAlphabet === "u") {
  console.log(enteredAlphabet + " is Vowel");
} else if (
  (enteredAlphabet >= "a" && enteredAlphabet <= "z") ||
  (enteredAlphabet >= "A" && enteredAlphabet <= "Z")
) {
  console.log(enteredAlphabet + " is a Consonant");
} else {
  console.log(enteredAlphabet + " is Non-Alphabet");
}

// Question Number 03//
// salution //

let result;

const operator = "/";

const number1 = 20;
const number2 = 5;

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;

  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;

  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}

// Question Number 04//
// salution //

function checkTriangle(x, y, z) {
  // Check for equilateral triangle
  if (x == y && y == z) console.log("Equilateral Triangle");
  // Check for isosceles triangle
  else if (x == y || y == z || z == x) console.log("Isosceles Triangle");
  // Otherwise scalene triangle
  else console.log("Scalene Triangle");
}

// Driver Code

// Given sides of triangle
let x = 1,
  y = 2,
  z = 1;

// // Function call
// checkTriangle(x, y, z);

// Question Number 05//
// salution //

units = 300;
bill = 0;
if (units <= 50) {
  bill = units * 0.5;
} else if (units <= 100) {
  bill = 55 * 1 + (units - 50) * 0.75;
} else if (units > 100) {
  bill = 55 * 1 + (units - 100) * 1.2;
} else if (units > 250) {
  bill = 55 * 1 + 100 * 2 + (units - 250) * 1.5;
}

if (bill > 150) {
  bill = bill + bill * 0.2;
}

console.log(bill);
