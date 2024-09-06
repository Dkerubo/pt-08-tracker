//function
/*
1. keyword function
2. parammeters and arguments

write a function to add two numbers
*/

let num1 = 7
let num2 = 38
function addNumbers() {
  return num1 + num2 
}
console.log(addNumbers())

// 1. write a program that determines whether a given number is positive or negatve
/*
1. write a function
- function declaration
- function nameFunc(){
}
2. positive

3. Negative
*/
let number = 8

function checkPositiveNegative(){
if(number >= 0){
//logic if condition is true
return 'positive'
}else{
//logic if condition is false
return 'negative'
}
}
//function invocation / call
console.log(checkPositiveNegative())

//2. write a program that checks if a number is even or odd
//8/2 =4/2=2/2=1

//function declaration
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}

let num = 7;
console.log(checkEvenOrOdd(num)); 
// Output: 7 is odd.

//3. Write a program to determine the greater of two numbers.

function findGreaterNumber(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}.`;
    } else if (num2 > num1) {
        return `${num2} is greater than ${num1}.`;
    } else {
        return `${num1} and ${num2} are equal.`;
    }
}


let number1 = 10;
let number2 = 20;
console.log(findGreaterNumber(number1, number2)); 
// Output: 20 is greater than 10.

//4. Write a program that transforms a numerical grade to a letter grade 
//(e.g grade 10 should display “A”).

function getLetterGrade(numericalGrade) {
    if (numericalGrade >= 100) {
        return 'A';
    } else if (numericalGrade >= 90) {
        return 'B';
    } else if (numericalGrade >= 80) {
        return 'C';
    } else if (numericalGrade >= 70) {
        return 'D';
    } else if (numericalGrade >= 60) {
        return 'E';
    } else {
        return 'F';
    }
}

let grade = 85;
console.log(`The letter grade for ${grade} is ${getLetterGrade(grade)}.`); 
// Output: The letter grade for 85 is B.

