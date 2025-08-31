// console.log("Part 2 functions is ready.");

// //Functions - Declarations and Expressions
// function logger(){
//     console.log("My name is Clint");
// }

// logger ();
// logger ();
// logger ();

// function fruitProcessor(apples, oranges){

//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5,3));

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);

// //Function Expression

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;

// };

// const age1 = calcAge(2000);
// console.log(age1);

// console.log(calcAge(1991));

// function introduce (firstName, lastName, age){
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return introduction;
// }

// console.log(introduce("Clinton", "Natalia", "33"));
// console.log(introduce("John"));

// function yearsUntilRetirement(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in  ${retirement} years`
//     } else {
//         return `${firstName} has already retired`;
//     }
// }
// console.log(yearsUntilRetirement(1991, "Clint"));

// //function scope

// const globalVar = "I am global";

// function testScope(){
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);    
// }

// testScope();
// console.log(globalVar);
// // console.log(localVar);


// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3; // Your code here
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
//   }// Your code here
//   // Remember: team needs DOUBLE the score to win
//   // Use template literals for nice output
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

const grades = [85, 92, 78, 96, 88];
console.log(grades);

const friends = [ "Michael", "Steven", "Peter"];
console.log(friends);

const mixed = ['Jonas', 40, false];
console.log(mixed);


const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

//Accesssing Array Elements

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[4]);

//access the length
console.log(friends.length);

//Change array elements
friends[0] = "Jay";
console.log(friends);



