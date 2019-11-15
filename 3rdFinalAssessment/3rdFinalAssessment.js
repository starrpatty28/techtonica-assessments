function primeNum(int){
  if(int <= 2 ) {
    return false;
  }
  for(let i = 2; i <= Math.sqrt(int); i++) {
    if(int % i === 0) {
      return false;
    }
  } 
  return true;
}
console.log(primeNum(7));
console.log(primeNum(15));

//Function takes in a number
//Function spits out an Boolean

//Game Plan
// Check if int is less than 2, if it is, its not a Prime
//Create a forloop but start it at 2 and loop through the sqrt of the the number given
//Check to see if i is divisiable by the number given, if so, that number is cleary not a prime, its false
//else true 
//I beleive this function has a run time of O(N)

//write a function that takes an input and returns an array of all prime numbers between 2 and the input

function primeDisplay(int) {
  var array = [2];
  for ( let i = 3; i < int; i += 2) {
      if (primeNum(i)) {
          array.push(i);
      }
  }
  console.log(array);
}
console.log(primeDisplay(6));
console.log(primeDisplay(12));

//Function takes in an Int
//Function spits out an array

//Game Plan
//create an empty variable that starts at 2
//create a for loop where i starts at 3 
//let the loop run through the prime numbers until the i is less than the int
//if the primeNum[i]
//push that number to the array
//every array will start with 2 and the rest of the prime numbers 


function checkArr(array){ 
  for(i = 0; i < array.length; i++) {
    //console.log(i);
    //console.log(array[i].charAt(0));
     if(array[i+1].charAt(0) === array[i+2].charAt(0) && array[i+1].charAt(0) === array[i+3].charAt(0))
      return true;
  }
  return false;
}
//console.log(checkArr(["bat", "sat", "superb", "ship", "bell"]))//True
//console.log(checkArr(["ax", "art", "radio", "frog"]))  //False

//Function takes in an array
//Function spits out an Boolean

//Game Plan
//Create a forloop to loop through the arrays length
  //console.log i
  //console.log array[i].charAt(0) the first letters
//Check to see if the first letter  is the same of the first second letter and the same as the 3rd first letter, if it is, then retrun true
//else false
  //It passes the first test. I am missing something but I do not know what O(N) 
//Bad anxiety and the proctors are talking and laughing during the test, unacceptable and irritating.
