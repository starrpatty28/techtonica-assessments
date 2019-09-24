// Question 1 
// Write a function that takes a “target number”, “min number”, and “max number”. Return whether target number is between the min and the max (inclusive).
// Example 1:
// * Input: Target = 3, Min = -1, Max = 3
// * Return: True
// Example 2:
// * Input: Target = 5, Min = 6, Max = 8
// * Return: Fals 

function minMax (tar_num, min_num, max_num) {
  if (tar_num <= min_num || tar_num <= max_num) {
    return true;
  } else {
    return false;
  }
}
console.log(minMax(3,-1, 3)); //true
console.log(minMax(5,6,8)); //true
console.log(minMax(4,6,8)); //true
console.log(minMax(20,6,8)); //false
console.log(minMax(100, 50, 10)); //false 

//Function takes in min, max, target
//function spits out Boolean

//Game Plan
//if target_num (if target num is less than minimum)
//if target_num(if target is less than max)
//return true (use || or method)
//else return false 




// Question #2

let fruits = ['apple', 'banana', 'sandwich', 'banana', 'cookie', 'cookie', 'banana']; 

 let counts = {}; 
 let compare = 0; 
 let frequent; 
 (function(array) {  
  for (let i = 0; i < array.length; i++) {  //forloop through array
      //console.log(i);
    let name = array[i]; 
      //console.log(name); //loops works
      if(counts[name] === undefined) { 
        counts[name] = 1;
        //console.log(counts[name]); = 1
      }else {
        counts[name] = counts[name] + 1;
          //console.log(counts[name] +1)
      } 
      if(counts[name] > compare){
             compare = counts[name];
              //console.log(counts[name]);
             frequent = fruits[i];
             console.log(fruits[i]);
    }
  } 
  return frequent;
});


//Function takes in an array
//Function spits out the most frequent word

//Game Plan
//Create a empty object, empty variable for 0, frequent var
//create a function with forloop to go through array 
//ceate another variable to give to 'i' which just looped
// if name is undefined, return 1
  //console.log name
//else name +1
//if name is greater than compare, then compare now equals name
//frequent = fruits[i]
//return frequent, no answer!!
//this challenge sucks!!!!!!!




//Question #3 

const name = [
  {firstName: 'Alicia', lastName: 'Alicia'},
  {firstName: 'Larry', lastName: 'Larry'},
  {firstName: 'Harry', lastName: 'Harry'},
  {firstName: 'Barry', lastName: 'Johnson'}
]

function names(array) { 
  for (let i = 0; i < array.length; i++) {
    //console.log(i);
   if(array[i].firstName === array[i].lastName) {
     array[i].firstName += '!';
     array[i].lastName = 'same';
   }
  } 
  return array;
}
names(name); 

//function takes in an array of objects
//function spits out objects altered

//Game Plan
//create a forloop tp go through the array
//console.log to make sure the loop works
//Check to see if the first and last name match (condtional if)
//if first name match then place an ! behind it 
//if last name match replace it to 'same'
//return the array
//call function


// Question #4

function evenOdd (int) {
  let results = [];

  while(int > 1) {
    results.push(int)
    let isEven = (int%2 === 0);
      if(isEven) {
        int = int/2;
      }else {
        int = int*3+1;
      }
  }
  results.push(int)
  return results;
}
evenOdd(11);
//evenOdd(10); 


//function takes in Integer (start number)
//function spits out array

//Game plan
//create an empty array to push to 'results'
//first tried a forloop, didnt work, it game me only the number
//second try was a while loop
  //while Integer greater than 1, complete condition
  //push Integer to results
  //create a variable for if its even
//if the Integer is even, divide it by 2
//if its odd, *+1
//return results you pushed too

//Question #5 

let factorial = function fact(int) {
  if(int <= 0) {
    return 1;
  } else {
    return (int * factorial(int -1));
  }
};
console.log(factorial(6));
console.log(factorial(4));
console.log(factorial(3)); 

//function takes in an Integer
//function spits out factorial to number given

//GamePLan
//create a function with a condtional
//if Integer is less than  or equal to 0, return 1
//else return Int, * the function (factorial(int-1))