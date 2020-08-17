/*I have written out the shells of some functions that you will have to create the logic for. a couple of tips:    

  1. Take your time. Think about each problem, and try to break it into its individual parts. 
     consider writing down these steps, and then try and convert them into code

  2. Run your code along the way. If you are getting strange outputs, use them to help figure out where you 
     are making your mistake. Make sure to test every function with multiple different inputs.

  3. Uncomment the function calls I have made for you at the bottom of the file in order to test your function. 
     make sure you are getting all of the expected results
*/


// Function one: should have two parameters, meaning it will take two arguments. 
// Should add two numbers, and console.log the result.

const addTwoNumbers = function(first, second) {

  //Your code goes here
  let result = first + second; 
  console.log(result);
}
addTwoNumbers(2, 3);



// Function Two: should have two parameters, meaning it will take two arguments. 
// Should multiply the two numbers, and console.log the result.

const multiplyTwoNumbers = function(first, second) {

  //Your code goes here
  let result = first * second;
  console.log(result);
}
multiplyTwoNumbers(3, 4);

// Function Three: should have two parameters, meaning it will take two arguments. 
// Should divide the first argument by the second, and console.log the result.

const divideXByY = function(first, second) {

  //Your code goes here
  let result = first / second;
  console.log(result);
}
divideXByY(18, 6);

// Function Four: should have two parameters, meaning it will take two arguments. 
// The first argument will be the total amount in dollars and cents (ex. 10.25) and the second will be the percentage of tax charged (ex. 5).
// calculate the toal price (the amount, + the percentage)

const calculateTax = function(first, second) {

  //Your code goes here
  let result = first * second;
  console.log(result);

}
calculateTax(10.25, 1.05);


// Function Five: should have 0 parameters, meaning it will take 0 arguments. 
// log to the console the numbers from 1 to 10, one line at a time

const printNumbersToTen = function() {

  //Your code goes here
  for(let i = 1; i <= 10; i++){
    console.log(i);
  }

}
printNumbersToTen();

// Function six: should have 1 parameter, meaning it will take 1 arguments. 
// log to the console the numbers from 1, to whatever number is given as an argument (x), one line at a time

const printNumbersToX = function(x) {

  //Your code goes here
  for(let i = 1; i <= x; i++){
    console.log(i);
  }

}
printNumbersToX(18);

// Function seven: should have 2 parameters, meaning it will take 2 arguments. 
// log to the console the two strings given, added together, with a space in between

const addStrings = function(first, second) {

  //Your code goes here
  let result = `${first} is capital of ${second}.`;
  console.log(result);
}
addStrings("Ottawa", "Canada");

// Function eight: should have 0 parameter, meaning it will take 0 arguments. 
// log to the console the numbers from 1, to 100, one line at a time BUT:
// for every number that is a multiple of 3, print the word "fizz", and for every multiple of 5
// print the word "buzz". for every multiple of both, print "fizzbuzz"

const fizzBuzz = function() {

  //Your code goes here

  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
    }else if(i % 3 === 0){
      console.log("fizz");
    }else if (i % 5 === 0){
      console.log("buzz");
    }else {
      console.log(i);
    }
  }
}
fizzBuzz();
// Function nine: should have 1 parameter, meaning it will take 1 arguments. 
// log to the console the numbers from 1, to whatever number is given (x), one line at a time BUT:
// for every number that is a multiple of 3, print the word "fizz", and for every multiple of 5
// print the word "buzz"

const paramFizzBuzz = function(x) {

  //Your code goes here
  for(let i = 1; i <= x; i++){
    if(i % 3 === 0){
      console.log("fizz");
    }else if(i % 5 === 0){
      console.log("buzz");
    }else {
      console.log(i);
    }
  }
}
paramFizzBuzz(200);


// Function ten, Bonus: should have 1 parameter, meaning it will take 1 arguments. 
// log to the console the reverse of the given string

let reversed = "";
const reverseString= function(word) {

  //Your code goes here
  for (let i = word.length - 1; i >= 0; i--){
    reversed += word[i];
  }
  return reversed;
}
reverseString("Vancouver");
console.log(reversed);
//should = 6
// addTwoNumbers(1, 5) 

//should = -3
// addTwoNumbers(1, -4) 

//should = 120
// addTwoNumbers(20, 100) 



// should = 10
// multiplyTwoNumbers(2, 5)
// 


// should = 100
// multiplyTwoNumbers(20, 5)
// 


// should = 4
// divideXByY(20, 5)


// should = 6
// divideXByY(36, 6)


// should = 11
// calculateTax(10, 10)

// should = 120
// calculateTax(100, 20)

//  printNumbersToTen()

// printNumbersToX(5)

// printNumbersToX(45)

// printNumbersToX(10)

// should print = 'hello world'
// addStrings("hello", "world")

// fizzBuzz()

// paramFizzbuzz(25);

// paramFizzbuzz(75);

// paramFizzbuzz(47);




