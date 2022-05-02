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
checkTriangle(x, y, z);

// Question Number 05//
// salution //

if (a <= 50) {
  var b = a * 0.5;
  console.log(b);
} else if (a <= 150) {
  var c = 50 * 0.5;
  var d = a - 50;
  var e = d * 0.75;
  console.log(e + c);
} else if (a <= 250) {
  var c = 50 * 0.5;
  var d = 100 * 0.75;
  var e = c + d;
  var f = a - 150;
  var g = f * 1.2;
  console.log(g + e);
} else if (a >= 250) {
  var c = 50 * 0.5;
  var d = 100 * 0.75;
  var l = 100 * 1.2;
  var e = c + d + l;
  var f = a - 250;
  var g = f * 1.5;
  var x1 = g + e;
  var tax = x1 * (20 / 100);
  var total = x1 + tax;
  console.log(total);
}
