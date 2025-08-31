// // // // // // console.log("Part 2 functions is ready.");

// // // // // // //Functions - Declarations and Expressions
// // // // // // function logger(){
// // // // // //     console.log("My name is Clint");
// // // // // // }

// // // // // // logger ();
// // // // // // logger ();
// // // // // // logger ();

// // // // // // function fruitProcessor(apples, oranges){

// // // // // //     console.log(apples, oranges);
// // // // // //     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
// // // // // //     return juice;
// // // // // // }

// // // // // // console.log(fruitProcessor(5,3));

// // // // // // const juice1 = fruitProcessor(5, 0);
// // // // // // const juice2 = fruitProcessor(2, 4);
// // // // // // const juice3 = fruitProcessor(3, 2);

// // // // // // //Function Expression

// // // // // // const calcAge = function (birthYear) {
// // // // // //     return 2025 - birthYear;

// // // // // // };

// // // // // // const age1 = calcAge(2000);
// // // // // // console.log(age1);

// // // // // // console.log(calcAge(1991));

// // // // // // function introduce (firstName, lastName, age){
// // // // // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
// // // // // //     return introduction;
// // // // // // }

// // // // // // console.log(introduce("Clinton", "Natalia", "33"));
// // // // // // console.log(introduce("John"));

// // // // // // function yearsUntilRetirement(birthYear, firstName){
// // // // // //     const age = calcAge(birthYear);
// // // // // //     const retirement = 65 - age;

// // // // // //     if (retirement > 0) {
// // // // // //         return `${firstName} retires in  ${retirement} years`
// // // // // //     } else {
// // // // // //         return `${firstName} has already retired`;
// // // // // //     }
// // // // // // }
// // // // // // console.log(yearsUntilRetirement(1991, "Clint"));

// // // // // // //function scope

// // // // // // const globalVar = "I am global";

// // // // // // function testScope(){
// // // // // //     const localVar = "I am local";
// // // // // //     console.log(globalVar);
// // // // // //     console.log(localVar);    
// // // // // // }

// // // // // // testScope();
// // // // // // console.log(globalVar);
// // // // // // // console.log(localVar);


// // // // // // ////////////////////////////////////
// // // // // // // Coding Challenge #1

// // // // // // // Function to calculate average of 3 scores
// // // // // // function calcAverage(score1, score2, score3) {
// // // // // //   return (score1 + score2 + score3) / 3; // Your code here
// // // // // // }

// // // // // // // Function to check winner
// // // // // // function checkWinner(avgDolphins, avgKoalas) {
// // // // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // // // //     return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
// // // // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // // // //     return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
// // // // // //   } else {
// // // // // //     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// // // // // //   }// Your code here
// // // // // //   // Remember: team needs DOUBLE the score to win
// // // // // //   // Use template literals for nice output
// // // // // // }

// // // // // // // Test Data 1
// // // // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // // // Test Data 2
// // // // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // const grades = [85, 92, 78, 96, 88];
// // // // // console.log(grades);

// // // // // const friends = [ "Michael", "Steven", "Peter"];
// // // // // console.log(friends);

// // // // // const mixed = ['Jonas', 40, false];
// // // // // console.log(mixed);


// // // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // // console.log(years);

// // // // // //Accesssing Array Elements

// // // // // console.log(friends[0]);
// // // // // console.log(friends[1]);
// // // // // console.log(friends[2]);
// // // // // console.log(friends[4]);

// // // // // //access the length
// // // // // console.log(friends.length);

// // // // // //Change array elements
// // // // // friends[0] = "Jay";
// // // // // console.log(friends);

// // // // // const calcAge = function (birthYear){
// // // // //     return 2025 - birthYear;
// // // // // }

// // // // // const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// // // // // console.log(ages);

// // // // // const newLength = friends.push("John");
// // // // // console.log(friends);
// // // // // console.log(newLength);

// // // // // friends.unshift("Mark");
// // // // // console.log(friends);

// // // // // //removing elements

// // // // // const popped = friends.pop();
// // // // // console.log(popped);
// // // // // console.log(friends);

// // // // // const shifted = friends.shift();
// // // // // console.log(shifted);
// // // // // console.log(friends);


// // // // // //finding an element
// // // // // console.log(friends.indexOf("Steven"));
// // // // // console.log(friends.indexOf("Mark"));

// // // // // //includes
// // // // // console.log(friends.includes("Peter"));
// // // // // console.log(friends.includes("John"));

// // // // // //Array Iterations

// // // // // for (let i = 0; i < friends.length; i++) {
// // // // //     console.log(friends[i]);    
// // // // // }
// // // // // // one way to create a for each
// // // // // friends.forEach(function (friend, index) {
// // // // //     console.log(`${index + 1}: ${friend}`);
// // // // // });


// // // // // friends.forEach(
// // // // //     (friend, index) => {
// // // // //     }
// // // // // )


// // // // // //practical example
// // // // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // // // let total = 0;

// // // // // for (let i = 0; i < grades2.length; i++) {
// // // // //     total += grades2[i];    
// // // // // }

// // // // // console.log(total);


// // // // // const average = total / grades2.length;
// // // // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // // // let passedCount = 0;
// // // // // grades2.forEach(grade => {
// // // // //     if (grade >= 70) passedCount ++;
// // // // // })

// // // // // console.log(`${passedCount} out of ${grades2.length} students have passed`);


// // // // ////////////////////////////////////
// // // // // Coding Challenge #2 - Student Grade Manager

// // // // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // // // Function to calculate average
// // // // // function calculateAverage(grades) {
// // // // //   let sum = 0;
// // // // //   for (let i = 0; i < grades.length; i++) {
// // // // //     sum += grades[i];
// // // // //   }
// // // // //   return sum / grades.length;
// // // // // }

// // // // // // Function to find highest grade
// // // // // function findHighestGrade(grades) {
// // // // //   let highest = grades[0];
// // // // //   for (let i = 1; i < grades.length; i++) {
// // // // //     if (grades[i] > highest) {
// // // // //       highest = grades[i];
// // // // //     }
// // // // //   }
// // // // //   return highest;
// // // // // }

// // // // // // Function to find lowest grade
// // // // // function findLowestGrade(grades) {
// // // // //   let lowest = grades[0];
// // // // //   for (let i = 1; i < grades.length; i++) {
// // // // //     if (grades[i] < lowest) {
// // // // //       lowest = grades[i];
// // // // //     }
// // // // //   }
// // // // //   return lowest;
// // // // // }

// // // // // // Function to count passing students
// // // // // function countPassing(grades, passingGrade) {
// // // // //   let count = 0;
// // // // //   for (let i = 0; i < grades.length; i++) {
// // // // //     if (grades[i] >= passingGrade) {
// // // // //       count++;
// // // // //     }
// // // // //   }
// // // // //   return count;
// // // // // }

// // // // // // Generate complete report
// // // // // const average = calculateAverage(grades);
// // // // // const highest = findHighestGrade(grades);
// // // // // const lowest = findLowestGrade(grades);
// // // // // const passing = countPassing(grades, 70);

// // // // // console.log("=== GRADE REPORT ===");
// // // // // console.log(`Average: ${average.toFixed(2)}`);
// // // // // console.log(`Highest: ${highest}`);
// // // // // console.log(`Lowest: ${lowest}`);
// // // // // console.log(`Passing students: ${passing} out of ${grades.length}`);


// // // // const aikenArray = [
// // // //     "Aiken",
// // // //     "Gunay",
// // // //     2025 - 2000,
// // // //     "teacher",
// // // //     ["Micheal", "Peter", "Steven",]

// // // // ];

// // // // console.log(aikenArray[0]);
// // // // console.log(aikenArray[1]);

// // // // const aikenObject = {
// // // //     firstName: `Aiken`,
// // // //     lastName: `Gunay`,
// // // //     age: 2025 - 2000,
// // // //     job: "teacher",
// // // //     friends: ["Micheal", "Peter", "Steven"],
// // // // };
// // // // console.log(aikenObject);

// // // // //Property access methods
// // // // //Dot notation
// // // // console.log(aikenObject.firstName);
// // // // console.log(aikenObject.lastName);
// // // // console.log(aikenObject.age);

// // // // //Bracket notation
// // // // console.log(aikenObject[`firstName`]);
// // // // console.log(aikenObject[`lastName`]);
// // // // console.log(aikenObject[`age`]);

// // // // const nameKey = "Name";
// // // // console.log(aikenObject[`first` + nameKey]);

// // // // //Modifying existing properties

// // // // aikenObject.job = `Programmer`;
// // // // aikenObject["age"] = 30;
// // // // console.log(aikenObject);

// // // // // add new properties
// // // // aikenObject.location = "Philippines";
// // // // aikenObject["twitter"] = "aikenprogrammer";
// // // // aikenObject.hasDriverLicense = true;
// // // // console.log(aikenObject);

// // // // //when to use dot vs bracker notation
// // // // const property = "job";
// // // // console.log(aikenObject[property]);
// // // // //1. Property name is in a variable
// // // // //2. Property name has spaces
// // // // //3. Property name is computed/dynamic
// // // // //"Otherwise, prefer dot notation"

// // // // //Objects vs Array Decision Making

// // // // //Arrays
// // // // const listOfYears = [1991, 1984, 2008, 2020];
// // // // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // // // const testScores = [85, 92, 78, 96];

// // // // //Objects
// // // // const person = {
// // // //     name: "Jonas",
// // // //     age: 46,
// // // //     occupation: "teacher",
// // // // };

// // // // const car = {
// // // //     brand: "Toyota",
// // // //     model: "Camry",
// // // //     year: 2020,
// // // //     color: "blue",
// // // // };
// // // // //objects can contain arrays, and arrays can contain objects.
// // // // const student = {
// // // //     name: `Sarah`,
// // // //     grades: [85, 92, 78],
// // // //     address: {
// // // //         street: `123 Main St`,
// // // //         city: "New York",
// // // //     },
// // // // };

// // // // console.log(student.grades[0]);
// // // // console.log(student.address.city);

// // // // //Object Methods
// // // // const john = {
// // // //     firstName: "John",
// // // //     lastName: "Doe",
// // // //     birthYear: 1995,
// // // //     job: "teacher",
// // // //     friends: ["Michael", "Peter", "Steven",],
// // // //     hasDriversLicense: true,
    
// // // //     calcAge: function(birthYear){
// // // //         return 2025 - birthYear;
// // // //     },
// // // // };

// // // // console.log(john.calcAge(2000));

// // // // //'this' keyword
// // // // const johnImproved = {
// // // //     firstName: "John",
// // // //     lastName: "Doe",
// // // //     birthYear: 1995,
// // // //     job: "teacher",
// // // //     friends: ["Michael", "Peter", "Steven",],
// // // //     hasDriversLicense: true,

// // // //     calcAge: function() {
// // // //         this.age = 2025 -this.birthYear;
// // // //         return this.age;
// // // //         },
// // // //         getSummary: function() {
// // // //             return `${this.firstName} is a ${this.calcAge()} -year old ${this.job}, and he has a ${this.hasDriverLicense ? `a` : `no` } no drivers license`;
    
       
// // // //     },
// // // // };

// // // // console.log(johnImproved.calcAge());
// // // // console.log(johnImproved.age);
// // // // console.log(johnImproved.getSummary());

// // // // //Complex object with multiple methods 
// // // // const bankAccount = {
// // // //     owner: "John Doe",
// // // //     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// // // //     interestRate: 1.2,
// // // //     pin: 1111,

// // // //     // Method to calculate balance
// // // //     calcBalance: function () {
// // // //         this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
// // // //         return this.balance;
// // // //     },

// // // //     // Method to add movement
// // // //     deposit: function (amount) {
// // // //         this.movements.push(amount);
// // // //         this.calcBalance();
// // // //     },

// // // //     // Method to withdraw
// // // //     withdraw: function (amount) {
// // // //         this.movements.push(-amount);
// // // //         this.calcBalance();
// // // //     },

// // // //     // Method for account summary
// // // //     getStatement: function () {
// // // //         return `${this.owner}'s account balance: ${this.calcBalance()}`;
// // // //     }
// // // // };

// // // // // Test the methods
// // // // console.log(bankAccount.getStatement());  // Before deposit
// // // // bankAccount.deposit(500);
// // // // console.log(bankAccount.getStatement());  // After deposit


// // // ////////////////////////////////////
// // // // Coding Challenge #3 - User Profile System

// // // const user = {
// // //   firstName: "Sarah",
// // //   lastName: "Johnson",
// // //   birthYear: 1995,
// // //   location: "New York",
// // //   interests: ["photography", "travel", "coding"],
// // //   friends: [
// // //     { name: "Michael", status: "active" },
// // //     { name: "Emma", status: "inactive" },
// // //     { name: "David", status: "active" },
// // //   ],
// // //   isActive: true,

// // //   // Calculate age method
// // //   calcAge: function () {
// // //     this.age = new Date().getFullYear() - this.birthYear;
// // //     return this.age;
// // //   },

// // //   // Add friend method
// // //   addFriend: function (name, status = "active") {
// // //     this.friends.push({ name, status });
// // //     return this.friends.length;
// // //   },

// // //   // Get active friends count
// // //   getActiveFriends: function () {
// // //     return this.friends.filter(friend => friend.status === "active").length;
// // //   },

// // //   // Toggle active status
// // //   toggleStatus: function () {
// // //     this.isActive = !this.isActive;
// // //     return this.isActive;
// // //   },

// // //   // Generate profile summary
// // //   getSummary: function () {
// // //     const age = this.calcAge();
// // //     const activeFriends = this.getActiveFriends();
// // //     const status = this.isActive ? "active" : "inactive";

// // //     return `
// // // ${this.firstName} ${this.lastName}, ${age} years old from ${this.location}.
// // // Currently ${status}.
// // // ${activeFriends} active friends out of ${this.friends.length} total.
// // // Interests: ${this.interests.join(", ")}.

// // // Connected and sharing life's adventures.
// // //     `.trim();
// // //   }
// // // };

// // // // Test your user profile system
// // // console.log(user.getSummary());

// // // user.addFriend("Alex", "active");
// // // user.toggleStatus();

// // // console.log(`\nAfter updates:`);
// // // console.log(user.getSummary());


// // // Select DOM Elements

// // // 1st method
// // //querySelector - uses css selectors

// // const message =  document.querySelector(".message");
// // console.log(message);
// // //gets us the entire element object with all its properties
// // const button = document.querySelector("#Btn");
// // console.log(button);

// // const heading = document.querySelector("h1");
// // console.log(heading);
// // //query selector returns the first matching document
// // console.log(message.textContent);
// // console.log(button.id);
// // console.log(heading.textContent);


// // //getElementByID
// // const buttonByID = document.getElementById("btn");
// // console.log(buttonByID);
// // console.log(buttonByID === button);

// // //querySelectorAll - Multiple Elements

// // const allParagraphs = document.querySelectorAll("p");
// // console.log(allParagraphs);
// // console.log(allParagraphs[0]);


// //Modifying element content

// const message = document.querySelector(".message");

// //Text Content
// console.log(message.textContent);
// message.textContent = `Hello From JavaScript`;
// console.log(message.textContent);


// //innerHTML
// message.innerHTML = "<strong>Bold text from JS!</strong>";
// //innerText

// console.log(message.innerText);
// //Input Element Value

// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default Text";

// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundcolor = "yellow";
// heading.style.fontSize = "3rem";
// const button = document.querySelector("#btn");
// button.style.padding = "20px";
// button.style.borderRadius = "10px";

// //Event listeners user interactions

// button.addEventListener(`click`, function(){
//     console.log("Button was clicked!");
//     message.textContent = "You clicked the button";
//     message.style.color = "green";
// });


// let clickCount = 0;
// button.addEventListener("click", function(){
//     clickCount++;
//     button.textContent = `Clicked ${clickCount} times`;
//     button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;

// }
// );

// //Input events
// const display = document.querySelector('.message');

// input.addEventListener('input', function() {
//   const userText = input.value;
//   display.textContent = `You typed ${userText}`;  // Use ${} for interpolation, NOT $()
//   display.style.fontSize = `${userText.length + 10}px`; // Increase font size based on input length
// });


// //keyboard events - where it respon to specific key

// input.addEventListener("keydown", function (event){
// console.log(`Key pressed ${event.key}`);

// if (event.key === `Enter`){
//     display.textContent = `You pressed Enter! Text was ${input.value}`
//     input.value = ""; //clear input
// }
// });

// === Game State ===
const gameState = {
  scores: [0, 0],
  winningScore: 5,
  gameActive: true,

  resetGame: function () {
    this.scores = [0, 0];
    this.gameActive = true;
    updateDisplay();
    setWinnerDisplay(null);
  },
};

// === DOM Elements ===
const p1Score = document.querySelector('#score-1');
const p2Score = document.querySelector('#score-2');
const p1Button = document.querySelector('[data-player="1"]');
const p2Button = document.querySelector('[data-player="2"]');
const resetButton = document.querySelector('#btn-reset');
const winningInput = document.querySelector('#winning-score');
const targetDisplay = document.querySelector('.target');
const winnerMessage = document.querySelector('.winner');
const winnerNameSpan = document.querySelector('.winner-name');
const player1Panel = document.querySelector('.player-1');
const player2Panel = document.querySelector('.player-2');

// === Update Display ===
function updateDisplay() {
  p1Score.textContent = gameState.scores[0];
  p2Score.textContent = gameState.scores[1];
  targetDisplay.textContent = gameState.winningScore;
}

// === Add Point ===
function addPoint(playerIndex) {
  if (!gameState.gameActive) return;

  gameState.scores[playerIndex]++;
  updateDisplay();
  checkWinner();
}

// === Check Winner ===
function checkWinner() {
  const [score1, score2] = gameState.scores;
  if (score1 >= gameState.winningScore || score2 >= gameState.winningScore) {
    gameState.gameActive = false;
    const winnerIndex = score1 > score2 ? 0 : 1;
    showWinner(winnerIndex);
  }
}

// === Show Winner ===
function showWinner(index) {
  const winnerPanel = index === 0 ? player1Panel : player2Panel;
  const loserPanel = index === 0 ? player2Panel : player1Panel;

  winnerPanel.classList.add('winner');
  loserPanel.classList.add('loser');

  winnerNameSpan.textContent = `Player ${index + 1}`;
  winnerMessage.classList.remove('hidden');
}

// === Reset Winner Styling ===
function setWinnerDisplay(reset) {
  player1Panel.classList.remove('winner', 'loser');
  player2Panel.classList.remove('winner', 'loser');
  winnerMessage.classList.add('hidden');
}

// === Event Listeners ===
p1Button.addEventListener('click', () => addPoint(0));
p2Button.addEventListener('click', () => addPoint(1));
resetButton.addEventListener('click', () => gameState.resetGame());

winningInput.addEventListener('change', function () {
  const val = Number(this.value);
  if (val > 0 && val <= 20) {
    gameState.winningScore = val;
    gameState.resetGame();
  }
});

// === Keyboard Shortcuts ===
document.addEventListener('keydown', (e) => {
  if (e.key === '1') addPoint(0);
  if (e.key === '2') addPoint(1);
  if (e.key.toLowerCase() === 'r') gameState.resetGame();
});

// === Initialize ===
updateDisplay();


