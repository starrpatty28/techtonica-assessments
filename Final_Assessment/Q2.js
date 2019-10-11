// Question 2
// Write a function that checks if a string is composed of all unique characters. 
// Example 1:
// Input: "banana"
// Returns: False (because the letters "a" and "n" are repeated)
// Example 2:
// Input: "bacon" 
// Returns: True (because each letter appears once)


// Save the following code and text in a file called q2.js:
// Write the function
// What is the runtime of this function? Briefly explain why.
// Unit tests: What are some inputs you would test to make sure this function works? Please give specific example inputs.
// If you’re not able to code the function, describe in words the algorithm you would use (be as specific as possible)

function uniqueLetters(letters) {
  for (var i = 0; i < letters.length; i++) {
    //console.log(i);
    for (var j = i+1; j < letters.length; j++) {
       //console.log(j);
      if(letters[i] === letters[j]) {
        return false;
      }
     }
   } 
   return true;       
}
console.log(uniqueLetters("banana"));
console.log(uniqueLetters("bacon"));

//Function takes in a strings
//Function spits out a boolean 

//Game Plan
//Create a loop to go through the length of the array
//console.log to make sure array goes through all letters
//Create another forloop but this time the loop will be j, and j
//will start at 'i+1' and the loop will continue i+j equals moe than 5 and then it will start again.
//Check is letters[i] and letters[i] characters are the same, if so return true, else return false (outside the loops)
//The Big-O runtime is O(n2) because the double forloop

