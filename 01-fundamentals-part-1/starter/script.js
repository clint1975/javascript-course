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


// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math Operations");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15/3);
// console.log("Exponentiation:", 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");

// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x)

// x += 10;
// console.log("x starts as:", x)

//  x *= 4;
//  console.log("x starts as:", x)

//  x /= 2;
//  console.log("x starts as:", x)

//  x++;
//  console.log("x starts as:", x)

//  x--;
//  console.log("x starts as:", x)

//  console.log("=== COMPARISON OPERATORS ===");

//  console.log("Age comparison: ");
//  console.log(ageJonas > ageSarah);
//  console.log(ageSarah >= 18);
//  console.log(ageJonas < 30);

//  console.log("Number comparison");
//  console.log(25 > 20);
//  console.log(15 <10);
//  console.log(18 >= 18);
//  console.log(16<= 15);

//  const isFullAge = ageSarah >= 18;
//  console.log("Sarah is an adult:", isFullAge);

//  console.log("Complex Comparison");
//  console.log(now - 1991 > now - 2018);

//  let z, y;
//  z = y = 25 - 10 - 5;
//  console.log(z, y);

//  const averageAge = (ageJonas + ageSarah) / 2;
//  console.log(ageJonas, ageSarah, averageAge);


//  ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // Your code here:
// // 1. Calculate BMIs
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);


// // 2. Create markHigherBMI variable

// const markHigherBMI = BMIMark > BMIJohn;

// // 3. Log results to console
// // log marks bmi
// console.log(BMIMark);
// // log jons bmi
// console.log(BMIJohn);
// // log markHigherBMI
// console.log(markHigherBMI);


// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm" + firstName + ", a " +(year - birthYear) + "year old " + job +  "!";

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
// console.log(jonasNew);


// console.log (`I'm ${2037 - 1991} years old`);
// console.log(`Math works here: ${2 + 3} equals five`);


// //if else statement
// const age = 10;

// if (age >= 18){
//     console.log(`Sarah can start a driving license`);

// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
// }

// console.log(Boolean (0));
// console.log(Boolean (undefined));
// console.log(Boolean ("Jonas"));
// console.log(Boolean ({}));
// console.log(Boolean (""));


// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// // Your if/else statement here:


// // Compare BMIs and create intelligent messages


// // Use template literals for beautiful output

// if (BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark} is higher than John's (${BMIJohn}))!`);
// }


const inputYear = "1991";
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// Automatic Type Coercion

console.log(`I'am ` + 23 + `years old`);

console.log(`23` - `10` - 3);
console.log(`23` / `2`);
console.log(`23` * `2`);

let n = `1` + 1;
console.log(n);

n = n - 1;
console.log(n);

//type conversion = explicity/manual (recommend)
//type coercion = Implicit/automatic (javascript does itself)


//Equality - Strict

// const age = `18`;
// if (age === 18) console.log(`You just became an adult (strict)`);
// if (age == 18) console.log(`You just became and adult :D (loose)`);

// console.log(`18` === 18);
// console.log(`18` == 18);
// console.log(18 === 18);

// //Why == can be dangerous

// console.log(`0` == 0);
// console.log(0 == false);
// console.log(`0` == false);
// console.log(null == undefined);

// console.log( `` == 0);
// console.log(`   ` == 0);

//Best Practice

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23){
//     console.log( `Cool! 23 is an amazing number`);
// } else if (favourite === 7) {
//     console.log(`7 is also a cool number`);
    
//     } else if (favourite == 9) {
//         console.log (`9 is also a cool number`);
//      } else {
//         console.log(`Number is not 23 or 7 o 9`)
//      }

//      if (favourite !==23) console.log(`Why not 23?`);
 
     
// Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired){
//     console.log(`Clint is able to drive!`);

// } else {
//     console.log(`Someone else should drive...`)
// }

// "Create a club entry system"
// 1. Create variables: age (number), hasID (boolean), isVIP (boolean)
// 2. Entry rules: (age >= 21 AND hasID) OR isVIP
// 3. Test with different combinations:
// ~ age 25, hasID true, isVIP false (should enter)
// ~ age 19, hasID true, isVIP true (should enter)
// ~ age 19, hasID false, isVIP false (should enter)
// 4. Use if/else to log appropriate messages"

// Club Entry System (Interactive with prompt)

// const age = Number(prompt("Enter your age:"));
// const hasID = confirm("Do you have an ID? Click OK for Yes, Cancel for No.");
// const isVIP = confirm("Are you a VIP? Click OK for Yes, Cancel for No.");

// // Entry rules: (age >= 21 AND hasID) OR isVIP
// if ((age >= 21 && hasID) || isVIP) {
//   alert("✅ Access granted. Welcome to the club!");
//   console.log("✅ Access granted. Welcome to the club!");
// } else {
//   alert("❌ Access denied. You must be 21+ with ID or be a VIP.");
//   console.log("❌ Access denied. You must be 21+ with ID or be a VIP.");
// }


const age = 17;
//basic ternary condition

const drink = age >=18 ? `wine` : `water`;
console.log(drink);

// if else statement
let drink2
if (age >=18) {
    drink = `wine`;

}else {
    drink2 = `water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`)

////////////////////////////////////
// Coding Challenge #4

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // Your ternary operator here

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"