// Question 1
// Check if a string is made up of the same string repeated twice in a row
// Example 1:
// Input: “cancan”
// Returns: true
// Example 2:
// Input: “hannah”
// Returns: false
// Save the following code and text in a file called q1.js:
// Write the function
// What is the runtime of this function? Briefly explain why.
// Unit tests: What are some inputs you would test to make sure this function works? Please give specific example inputs.
// If you’re not able to code the function, describe in words the algorithm you would use (be as specific as possible)

function sameString (string) {
  for(let i = 0; i < string.length; i++) {
    //console.log(i);
     //console.log(string[i]);
        if(string[i] === string[i+1] && string[i+1] !== string[i+2]) {
        return false;
     }
  }
  return true;
}
console.log(sameString("cancan")); //true
console.log(sameString("byebye")); //true
console.log(sameString("beets"));  //false
console.log(sameString("hannah")); // false
console.log(sameString("hello")); // false

//Function takes in a string 
//Function spits out a boolean

//Game Plan
//Loop through the string
  //console.log(i) to check the Loop
  //console.log(string[i]) to print out all letters (this is just for me)
//I want to check if the first letter (string[i]) is the same as the second letter [string[i+2]
//AND check if the second letter does not equal to the 3rd letter if so both return false
//ELSE return true
//The runtime for this function is O(N) due to the one forloop. That method supercedes all other methods.