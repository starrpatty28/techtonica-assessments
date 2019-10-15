// Question 2
 
// 2 people are sitting on a see-saw and you want to find 2 people to sit on the other side who will perfectly balance the see-saw.
 
// Let's say the 2 people already there have combined weight W. You have an array of personWeights of all the other people you can choose from for the other side. Write a function to return the 2 weights that will balance out W, or return null if there is no possible answer.
// Example:
// Input: 
// W = 10
// personWeights = [3, 4, 9, 11, 6]
// Returns: [4, 6]
// Save the following code and text in a file called q2.js:
// Write the function
// What is the runtime of this function? Briefly explain why.
// Unit tests: What are some inputs you would test to make sure this function works? Please give specific example inputs.
// If you’re not able to code the function, describe in words the algorithm you would use (be as specific as possible)

function balanceWeight(array, weight) {
  let balance = [];
    for(let i = 0; i < array.length; i++) {
      for (let j = i=1; j < array.length; i++) {
        if(array[i] + array[j] === weight) {
          balance.push(array[i]);
          balance.push(array[j]);
          return balance;
        }
      }
    }
   return null;
}
console.log(balanceWeight([3, 4, 9, 11, 6], 10)); // [4, 6]
console.log(balanceWeight([1, 4, 7, 11, 6], 13)); // [7, 13]
console.log(balanceWeight([10, 15, 12, 4, 2], 67)); // null
console.log(balanceWeight([89, 56, 17, 15, 2], 500)); // null

//Function takes in an array and weight
//Function spits out 2 numbers that could possibly add the weight
//if not the answer will be null

//Game Plan
//Create an empty array because I know I will push to that empty array numbers than can possible equal the given weight
//Create the first forloop to go through the array
//Create a second loop to add the second number to i each time this loop goes through again
//Check to see if the numbers that are being counted equals to the weight given
  //if they do, push it to the empty array
//if not return null
//I beleive this runtime is O(N2 due to the 2 forloops which take presidence over the other functions