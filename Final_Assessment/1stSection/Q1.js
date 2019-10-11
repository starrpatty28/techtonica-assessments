// Question 1
// Write a function that takes in an array of strings, and returns an array of the strings that start with “a”, “b”, or “c”.
// Example:
// Input: ["llama", "cow", "horse", "aardvark"]
// Returns: ["cow", "aardvark"]
// Save the following code and text in a file called q1.js:
// Write the function
// What is the runtime of this function? Briefly explain why.
// Unit tests: What are some inputs you would test to make sure this function works? Please give specific example inputs.
// If you’re not able to code the function, describe in words the algorithm you would use (be as specific as possible)

function startsWith(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let beginsWith = array[i][0];
      //console.log(beginsWith);
    if (beginsWith === 'a' || beginsWith === 'b' || beginsWith === 'c') {
      newArray.push(array[i]);
    } 
  }
  return newArray;
}

console.log(startsWith(['llama', 'cow', 'horse', 'aardvark'])); 
console.log(startsWith(['apple', 'honey', 'car', 'bark']));

//Function takes in array
//Function spits out array with certain being letters

//Game Plan
//First check if the array is an Array, if its not, dont even run the rest of the function (couldnt get it to work) :(
//Create a empty array because I know I have to have somewhere to push the strings
//Create a forloop to loop through the array
  //console.log to make sure my loop works
//Create a new variable 'beginsWith' that equals the array first letters
  //console.log to make sure (it Works!!) 
//Create an if statement that ask if 'begings with starts with 'a,b,c'
//Push the array[i] to newArray and return that.
//I beleive this function is O(n) because the forloop Big-O notation dominates the function.