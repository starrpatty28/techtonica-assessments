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

// function recursionFunc(int) {
//     if(int % 2 === 0) {
//       return false;
//     }else {
//       return true;
//     }
// }
// recursionFunc(6);
//recursionFunc(12);

//Function takes in an Int
//Function spits out an array

//I beleieve we had this same question before but the way my head is right now, I am unable to solev this with the right syntax
//my thought process was this was a recursive function if they reccomend that the first function could be used
//My game plan would be to create an if/esle statement to check is the number is a prime with a modulas 
//if the number is a prime, figure out a way to count through that number and if the the number is a prime, print out that number in an array. 

//I am clearly having problems with my debugger as I am unable to run anyting on this problem

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
  //It passes the first test. I am missing something but I do not know what.O(N) 
//Bad anxiety and the proctors are talking and laughing during the test, unacceptable and irritating.
