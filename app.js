// Chapter 12-13 IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// 1. 
let character = prompt("Enter a character:");

if (character >= 'A' && character <= 'Z') {
    console.log("Uppercase letter");
} else if (character >= 'a' && char <= 'z') {
    console.log("Lowercase letter");
} else if (!isNaN(char)) {
    console.log("Number");
} else {
    console.log("Other character");
}


// 2. 
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
    console.log(num1 + " is larger");
} else if (num2 > num1) {
    console.log(num2 + " is larger");
} else {
    console.log("Both numbers are equal");
}


// 3. 
let num = parseInt(prompt("Enter a number:"));

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}


// 4. 
let char = prompt("Enter a character:");

if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
    console.log("True - Vowel");
} else {
    console.log("False - Not a vowel");
}


// 5.
let correctPassword = "12345";  
let enteredPassword = prompt("Enter your password:");

if (!enteredPassword) {
    console.log("Please enter your password");
} else if (enteredPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password");
}


// 6.
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);


// 7.
let time = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900):"));

if (time >= 0 && time < 1200) {
    console.log("Good morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night");
} else {
    console.log("Invalid time");
}


// Chapter 10 (if Statements)
// 1. 
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}


// 2. 
if (x === y) {
    let z = prompt("Enter the value for z:");
    let newVar = z; 
}


// 3. 
let ZipCode = prompt("Enter your Zip Code:");
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}


// 4. 
var x = 1;
if (x === 1) {
    x = 2;  
}


// Chapter 11 (Comparison Operators)
// 1. 
if (x !== y) {
    
}


// 2. 
if (x >= y) {
    
}


// 3. 
let x = 5;
if (x !== 10) {
    x = 10;
}


// 4. 
if (5 !== 10) {
    alert("Congratulations!");
}


// 5. 
let firstName = prompt("Enter your first name:");
if (firstName !== "John") {
    alert("No match");
}



// Chapter 12 (if…else and else if statements)
// 1. 
if (x >= y) {
    alert("x is greater than or equal to y");
} else {
    alert("x is less than y");
}

// 2. 
let marks = parseInt(prompt("Enter your marks:"));
let percentage = (marks / 100) * 100;

if (percentage >= 90) {
    alert("Grade: A");
} else if (percentage >= 75) {
    alert("Grade: B");
} else if (percentage >= 50) {
    alert("Grade: C");
} else {
    alert("Grade: F");
}

// 3. 
var a = prompt("Enter a value for 'a':");

if (a == 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}


// 4. 
let city = prompt("Enter city:");
if (city === "Karachi") {
    alert("It's Karachi");
} else if (city === "Lahore") {
    alert("It's Lahore");
} else {
    alert("Other city");
}


// Chapter 13 (Testing sets of conditions)

// 1. 
if (a === b && c === d) {
    
}

// 2. 
if (a === b || c !== d) {
    
}


// 3. 
if ((name === "Maaz" || name === "Ali") && age < 60) {
    
}



// 4. 
let a = 10;
let b = 20;

if (a < b || a > b) {
    alert("a is not equal to b");
}



// 5. 
let first_Name = "John";
let last_Name = "Doe";

let enteredFirstName = prompt("Enter your first_Name:");
let enteredLastName = prompt("Enter your last_Name:");

if (enteredFirstName === first_Name && enteredLastName === last_Name) {
    alert("Your names match!");
} else {
    alert("Your names do not match.");
}



// Chapter 14 (If statements nested)

// 1. 
let password = prompt("Enter password:");
if (password) {
    if (password.length > 5) {
        alert("OK");
    } else {
        alert("Password must be greater than 5");
    }
}

// 2. 
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}


// 3. 
if (a === 1 && c === "Max") {
    alert("OK");
}


// 4. D
let num_1 = 5;
let num_2 = 5;

if (num_1 === num_2) {
    if (num_1 <= num_2) {
        alert("Both conditions are true: num_1 equals num_2 and num_1 is less than or equal to num_2");
    }
}