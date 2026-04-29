var num = 7;
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

var a = 10, b = 25, c = 15;
if (a >= b && a >= c) {
    console.log(a + " is the largest");
} else if (b >= a && b >= c) {
    console.log(b + " is the largest");
} else {
    console.log(c + " is the largest");
}

var marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}



var year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is not a Leap Year");
}






var age = 20;
if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}


var num1 = 10;
var num2 = 5;
var operation = "+"; // Can be +, -, *, /

switch (operation) {
    case "+":
        console.log("Result: " + (num1 + num2));
        break;
    case "-":
        console.log("Result: " + (num1 - num2));
        break;
    case "*":
        console.log("Result: " + (num1 * num2));
        break;
    case "/":
        console.log("Result: " + (num1 / num2));
        break;
    default:
        console.log("Invalid operation");
}



var n = -5;
if (n > 0) {
    console.log("Positive");
} else if (n < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


var number = 15;
if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + " is divisible by both 3 and 5");
} else {
    console.log(number + " is not divisible by both 3 and 5");
}