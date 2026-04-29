for (var i = 1; i <= 10; i++) {
    console.log(i);
}


var n = 10;
var sum = 0;
for (var i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("Sum of first " + n + " numbers is: " + sum);


var num = 5;
for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


var num = 5;
var fact = 1;
for (var i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log("Factorial of " + num + " is: " + fact);


var num = 1234;
var reversed = 0;
while (num > 0) {
    var digit = num % 10;
    reversed = (reversed * 10) + digit;
    num = Math.floor(num / 10);
}
console.log("Reversed Number: " + reversed);


var num = 98765;
var count = 0;
var temp = num;
while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
}
console.log("Number of digits: " + count);



var num = 121;
var original = num;
var reversed = 0;

while (num > 0) {
    var digit = num % 10;
    reversed = (reversed * 10) + digit;
    num = Math.floor(num / 10);
}

if (original === reversed) {
    console.log(original + " is a Palindrome");
} else {
    console.log(original + " is not a Palindrome");
}


var n = 8;
var a = 0, b = 1;
var series = "";

for (var i = 1; i <= n; i++) {
    series = series + a + " ";
    var nextTerm = a + b;
    a = b;
    b = nextTerm;
}
console.log("Fibonacci Series: " + series);



var num = 123;
var sum = 0;
while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
}
console.log("Sum of digits: " + sum);



var num = 7;
var isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " is a Prime Number");
} else {
    console.log(num + " is not a Prime Number");
}


var num = 153;
var temp = num;
var sum = 0;

while (temp > 0) {
    var digit = temp % 10;
    sum = sum + (digit * digit * digit);
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num + " is an Armstrong Number");
} else {
    console.log(num + " is not an Armstrong Number");
}


var size = 4;
for (var i = 1; i <= size; i++) {
    var row = "";
    for (var j = 1; j <= size; j++) {
        row = row + "* ";
    }
    console.log(row);
}


for (var i = 1; i <= 4; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row = row + i + " ";
    }
    console.log(row);
}


for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skips the rest of the loop for even numbers
    }
    console.log("Odd Number: " + i);
}



for (var i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Condition met! Stopping loop at: " + i);
        break; // Stops the loop immediately
    }
    console.log("Number: " + i);
}