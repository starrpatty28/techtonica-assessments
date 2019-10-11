/* Welcome to the Month 1 assessment, Part 1: JS!

For this section, you can use these 2 references: 
https://github.com/Techtonica/curriculum/blob/master/prework/codeSamples.js
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Please DO NOT Google or use any other references.

You can use whatever code editor you are most comfortable with. You should run and test 
your code as you work. You can use whatever method you are most comfortable with to run 
your code (e.g. node, Chrome console, VSCode, repl.it).

If you can't fully complete a question, please write down your best guess or your progress so far.

Recommended time: 1 hour
*/

// Exercise 1. Declare a boolean variable representing whether or not you have pets. Give it an appropriate name and a boolean value of your choice.

        var myPets = true;

// Exercise 2. Write a function that takes in one integer parameter called birthYear. The function should do the following:
// If birthYear is 2019, return “You were just born!”
// If birthYear is after 2019, return “You are from the future.”
// If birthYear is between 1900 and 1999 (inclusive), return “You were born in the 20th century.”
// For any other birthYear, return “Happy birth year.”
//
// Then write some function calls you would use to test this function.

function myBirthYear (number) {

    if(number === 2019) {
      return "You are just born";
    } else if (number > 2019) {
      return "You are from the future";
    } else if (number > 1900 && number < 2000) {
      return "You were born in the 20th century";
    } else {
      return "Happy birth year";
    }
  
  } 
  //myBirthYear(2019);
  //myBirthYear(2025);
  // myBirthYear(1920);
  // myBirthYear(2019);
  //myBirthYear(2000);
  
  
  
  //Function takes in an integer
  //Function spits out sentences based on different numbers
  
  //Game Plan
  //create an if else statement
  //return according to answers given
  //last is my else//call function with different numbers to test my code



// Exercise 3. Write a while loop that prints the integers from 1000 to 1020 (inclusive)

let j = 1000;
while (j < 1021) {
    console.log(j);
    j++;
}

// the While has to start at 1000
// and end at 1021 because it want it to print 1020



// Exercise 4. Write a for loop that prints 100, and counts down by 2’s until it gets to 0 (inclusive). (e.g. 100, 98, 96, 94 . . . 0)

for( let i = 100; i > -1; i-=2) {
    console.log(i);
  }
  
  //my loop starts at 100
  // I want to print 0 so if 'i' is greater than -1 it will loop and subtract by 2 until it reaches 0 because neg 1 is not greater than neg 1



// Exercise 5. Declare a variable called 'toppings' that is an empty array. Add 3 strings to the array that are different pizza toppings. 

var toppings = ['cheese', 'sauce', 'onions'];

// Then update the last item in the array to be a different value.
toppings.push = 'mushrooms';
console.log(toppings);

// Exercise 6. Make an object called employee that contains 3 properties:
// company (string)
// department (string)
// dateOfBirth (Date)
// For this exercise, you may also use the MDN page on Date as a reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

var employee = {
    company: 'techtonica',
    department: 'engineering',
    dateOfBIrth: '2017'
  }
  

// Print the department

console.log(employee.department);


// Add 2 more properties of your choice to the object. One property should have a numeric value and the other can be whatever data type you choose.

employee.status = 'full time'
employee.name = 'Alicia'
console.log(employee);


// Exercise 7. Write a function called multiply that takes in 3 numbers as parameters. It should 
// return true if the first number is the largest of the three numbers. Otherwise, return false.
// Then write some function calls you could use to test this function.

function multiply (num1, num2, num3) {
    if(num1 > num2 && num1 > num2) {
      return true;
        } else {
          return false;
      }
    
    }
    multiply(2,4,6);
    multiply(10,4,6);
    multiply(10,20,30);
    
    
    
    //function takes in 3 numbers as parameters
    //function spits out true or false [Boolean]
    
    //Game Plan
    //Create an if statement to check is num1 is greater than num2 and num3 w/logical operator &&
    //if it does not meet that condition return false