// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);



// console.log("===VARIABLES===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log (PI);

// var job ="programmer";
// job = "programmer";
// console.log(job); 'programmer'



// const country = "Philippines";
// const language = "Filipino";

// age = 25;


// console.log("=== DATA TYPES ===");

// // Number
// let id = 12345;
// console.log(id);
// console.log(typeof id);


// let lastName = "Natalia";
// console.log(lastName);
// console.log(typeof lastName);

// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);
// console.log(typeof JavaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);


// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);


// dynamicVariable =" I am now a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math Operations");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15/3);
console.log("Exponentiation:", 2 ** 3);

const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!");

console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 5;
console.log("x starts as:", x)

x += 10;
console.log("x starts as:", x)

 x *= 4;
 console.log("x starts as:", x)

 x /= 2;
 console.log("x starts as:", x)

 x++;
 console.log("x starts as:", x)

 x--;
 console.log("x starts as:", x)

 console.log("=== COMPARISON OPERATORS ===");

 console.log("Age comparison: ");
 console.log(ageJonas > ageSarah);
 console.log(ageSarah >= 18);
 console.log(ageJonas < 30);

 console.log("Number comparison");
 console.log(25 > 20);
 console.log(15 <10);
 console.log(18 >= 18);
 console.log(16<= 15);

 const isFullAge = ageSarah >= 18;
 console.log("Sarah is an adult:", isFullAge);

 console.log("Complex Comparison");
 console.log(now - 1991 > now - 2018);

 let z, y;
 z = y = 25 - 10 - 5;
 console.log(z, y);

 const averageAge = (ageJonas + ageSarah) / 2;
 console.log(ageJonas, ageSarah, averageAge);


 ////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Your code here:
// 1. Calculate BMIs
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);


// 2. Create markHigherBMI variable

const markHigherBMI = BMIMark > BMIJohn;

// 3. Log results to console
// log marks bmi
console.log(BMIMark);
// log jons bmi
console.log(BMIJohn);
// log markHigherBMI
console.log(markHigherBMI);





