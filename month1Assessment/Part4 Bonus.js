/* Welcome to the Month 1 assessment, Part 4: Bonus JS questions

The following questions are bonus questions! Only work on them once you’ve finished all other sections.
For this section, you can use this reference: 
https://github.com/Techtonica/curriculum/blob/master/prework/codeSamples.js
Please DO NOT Google or use any other references.
*/


/* Bonus 1. Write a function that takes in an array of numbers and returns how many of the numbers are greater than 10.
Then write some function calls you would use to test your function.
*/

function arrayNum(array) {
    for(i = 0; i <= array.length; i++) {
      //console.log(i);
      if( array[i] > 10) {
        console.log(array[i]);
      } 
    } 
  }
  //arrayNum([2,6,20,30,40,50,100]); 
  arrayNum([1,60,20,30,40,50,100]); 

//Function takes in an array
//Function spits out how many numbers are over 10

//Game Plan
//Declare my function 
//create a ForLoop to loop through my array, and I want my loop to go through the length of the array
//console.log(i) to make sure my loop worked
//create an if statement to check is array[i] each number is greater than 10
//console.log(array[i]) and it

***********************************************

//I want the function to be able to take in a array if all the numbers are below 10 so I added an 'else' statement, please see below:

function arrayNum(array) {
    for(i = 0; i <= array.length; i++) {
      //console.log(i);
      if( array[i] > 10) {
        console.log(array[i]);
      } else {
        return array;
      }
    }
  } 
  //arrayNum([2,6,20,30,40,50,100]); 
  //arrayNum([1,60,20,30,40,50,100]); 
  arrayNum([1,2,3,4,5,6,7]); 

  

/* Bonus 2. Write a function that takes in 2 string parameters and checks if the 2 strings are anagrams of each other (i.e. you can rearrange the letters of one to make the other).
Example 1: 
- Inputs: “cat”, “act”
- Output: true
Example 2:
- Inputs: “fo”, “oof”
- Output: false
Write some function calls you would use to test your function.
*/
