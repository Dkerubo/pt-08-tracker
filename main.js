//1. Write a JavaScript expression that calculates the area of a rectangle with a width of 10 and a height of 5.
//Area = Width * Height
console.log("Question 1")

let width = 10;
let height = 5;
let area = width * height;
console.log(area);

//2. Declare a variable temperature and assign it the value of 30. Then, update it to 35 and print both values.
// Declare and assign the initial value

console.log("Question 2")

let temperature = 30;  
// Print the initial value
console.log("Temperature:", temperature); 
 // Update the value
let updateTemperature = 35; 
// Print the updated value
console.log("Updated temperature:", updateTemperature); 

//3. Declare three variables with meaningful names to store a person's first name, last name, and age. Print a sentence like "John Doe is 25 years old
// Declaring variables to store the person's details

console.log("Question 3")

let firstName = "John";
let lastName = "Doe";
let age = 25;

// Printing a sentence with the person's information with Output: John Doe is 25 years old.

console.log(`${firstName} ${lastName} is ${age} years old.`);

//Create variables to store the following types of data: a string, a number, a boolean, an object, and null. Print each variable and its data type.

console.log("Question 4")

// Declaring variables of various data types
let myString = "Hello, World!"; // String
let myNumber = 42;              // Number
let myBoolean = true;           // Boolean
let myObject = {                // Object
  name: "Alice",
  age: 30
};
let myNull = null;              // Null

// Printing each variable and its data type
console.log(myString, typeof myString);   // Output: Hello, World! string
console.log(myNumber, typeof myNumber);   // Output: 42 number
console.log(myBoolean, typeof myBoolean); // Output: true boolean
console.log(myObject, typeof myObject);   // Output: { name: 'Alice', age: 30 } object
console.log(myNull, typeof myNull);       // Output: null object 

//5. Write a function calculateAverage that takes three numbers as input and returns their average.
// Calculate the sum of the three numbers
// Calculate the average by dividing the sum by the number of inputs
// Return the average
console.log("Question 5")
function calculateAverage(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    
    return average;
}

let average = calculateAverage(110, 120, 330);
console.log(average); 

//6. Create a function compareAges that takes two ages as parameters and returns true if the first age is greater than the second, otherwise return false.
// Compare the two ages
// Return true if the first age is greater
// Return false otherwise

//option 1
console.log("Question 6 option 1")

function compareAges(age1, age2) {
    
    if (age1 > age2) {
        return true; 
    } else {
        return false; 
    }
}

console.log(compareAges(30, 25)); // Output: true
console.log(compareAges(18, 21)); // Output: false

//option 2
/*console.log("Question 6 option 2")

function compareAges(age1, age2) {
    return age1 > age2; /
}

console.log(compareAges(30, 25)); // Output: true
console.log(compareAges(18, 21)); // Output: false
*/

//7. Write a function isAdult that takes an age as input and returns true if the age is 18 or older, and false otherwise.
// Check if the age is 18 or older
console.log("Question 7")

function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(20)); 
console.log(isAdult(17)); 

//8. Write a function multiply that takes two numbers as arguments, multiplies them, and returns the result.
 // Multiply the two numbers
console.log("Question 8")

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(5, 3));
console.log(multiply(7, 2)); 

//9. Create a function convertToCelsius that takes a temperature in Fahrenheit, converts it to Celsius, and prints the result.
 // Convert Fahrenheit to Celsius using the formula
console.log("Question 9")

function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
}

convertToCelsius(68);
convertToCelsius(32); 


//10. Write a function calculateDiscountedPrice that takes the original price and discount percentage as parameters, calculates the discounted price, and returns the final price.
  // Calculate the discount amount
// Calculate the final price after applying the discount
console.log("Question 10")

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = (originalPrice * discountPercentage) / 100;
    let finalPrice = originalPrice - discountAmount
    return finalPrice;
}

console.log(calculateDiscountedPrice(100, 20)); 
console.log(calculateDiscountedPrice(250, 15)); 




