// Part 1:
// Represent the binary search tree above in code. 

// Do this by making a Node class. Each node should have a value, a left child, and a right child. Value is a number and left child and right child are other Node objects.

// Create the given example tree in code using your Node class. Note: You DO NOT need to write an algorithm to create binary search trees -- you just need to set up this particular tree with every node having the correct left and right children.

// Here’s some sample code to get you started. You don't need to use this code but you can if you want.
// class Node {
// 	constructor(value, left_child, right_child) {
// 		// TODO fill me in
// 	}
// }

// let node1 = new Node(1, null, null);

// Save the following code and text in a file called q3.js:
// Include this comment above your answer: // Part 1
// Write the code for the Node class and the code to construct the tree.

//Part #1

class Node 
{ 
    constructor(value) 
    { 
        this.value = value; 
        this.left_child = left_child; 
        this.right_child = left_child; 
    } 
} 

const start = new Node(4);
start.left_child = new Node(2, new Node(0), new Node(3));
start.right_child = new Node(8, new Node(6), new Node(9));

//I created my Node Class like I would create a link- list, that I created. I am not sure what you want but I just coded what I would do if I was adding nodes to the tree. I hope this is correct.



// Part 2:
// Write a function that takes as inputs the root node of a binary search tree, and returns the smallest value in the tree.

// Hint: The left child of a node is always smaller than it, so you can find the smallest node in the tree by starting at the root node, going to its left child, then going to that node’s left child, etc, etc.
// Note: Your code should work for a tree of any size, not just the tree shown in the example.
// Example:
// Input: Root node from part 1
// Returns: 0
// Save the following code and text in the same file:

// Include this comment above your answer: // Part 2
// Write the function
// What is the runtime of this function? Briefly explain why.
// Unit tests: What are some inputs you would test to make sure this function works? Please give specific example inputs.
// If you’re not able to code the function, describe in words the algorithm you would use (be as specific as possible)


//Part 2
// Write the function
// What is the runtime of this function? Briefly explain why.
// Unit tests: What are some inputs you would test to make sure this function works? Please give specific example inputs.
// If you’re not able to code the function, describe in words the algorithm you would use (be as specific as possible)

class Node 
{ 
    constructor(value) 
    { 
        this.value = value; 
        this.left_child = left_child; 
        this.right_child = right_child; 
    } 
} 

const start = new Node(4);
start.left_child = new Node(2, new Node(0), new Node(3));
start.right_child = new Node(8, new Node(6), new Node(9));

function findSmallest(node) {
  if (node.left_child === null) {
      return node.value;
  } else {
      return findSmallest(node.left_child);
  }
}
console.log(findSmallest(start));

//Function takes in node
//Function spits out smallest node

//Game Plan
//Create an if statement to check if the left node is null
  //if null return the value of that node
  //else return the same function 'findSmallest'that nodes left child
//console.log the roo
//I think this would be a O(N) because of the boolean, you are returing one or the other.

// Part 3:
// Write a function that takes as inputs the root node of a binary search tree and a target number, and returns whether the target number is in the tree. Note: Your code should work for a binary search tree of any size, not just the one shown in the example.
// Example 1:
// Input:
//  Root node: Root node from part 1
// Target number: 6
// Returns: True (6 is the value of one of the nodes in the tree)
// Example 2:
// Input:
// Root node: Root node from part 1
// Target number: 5
// Returns: False (There is no node with value 5 in the tree)
// Save the following code and text in the same file:
// Include this comment above your answer: // Part 3
// Write the function
// What is the runtime of this function? Briefly explain why.
// Unit tests: What are some inputs you would test to make sure this function works? Please give specific example inputs.
// If you’re not able to code the function, describe in words the algorithm you would use (be as specific as possible)

// Congrats, you’re done with the regular questions! Remember to commit and push your code to GitHub.

function binarySearch(node, target) {
  while(node != null) {
      if(target === node.value) {
          return true;
      } else if(target > node.value) {
          node = node.right_child;
      } else {
          node = node.left_child
      }
  }
  return false;
}

//Function takes in a node and target
//Function spits out boolean

//Game Plan
//Create a while-loop stating while the node is not null
  //if target equals the node value, return true
//else if the target is greater than the node.value then your node now equals the left child
//else your node equals left child
//return fals
//I beleive the run time for this function is O(N) because of the while-loop.







