// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

        i = 1;
        while (i<=5) {
        console.log(i);
        i++
        }

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

        var i = 1;
        do {
        console.log(i);
        i++
       }
        while (i <= 5);


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

        for (let i=1; i<=5; i++) {
            console.log(i);
        }
        

// Exercise 4. Now we want a loop that prints the integers 
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

        i = 5;
        while (i>=1) {      //this is called an expression (evualted to be a boolean)
        console.log(i);
        i--
        }

        var i = 5;
        do {
        console.log(i);
        i--
        }
        while (i>=1);


        for (let i=5; i>=1; i--) {
            console.log(i);
        }
        

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this 
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

        i = 7;
        while (i<=27) {
        console.log(i);
        i++
        } 

        var i =7;
        do {
        console.log(i);
        i++
        }
        while (i<=27);


        for (let i=7; i<=27; i++) {
            console.log(i);
          }
          


// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc. 
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.


        i = 10;
        while (i<=100) {
        console.log(i);
        i=i+10
        }


        var i = 10;
        do {
        console.log(i);
        i=i+10
        }
        while (i<100);


        for (let i=10; i<=100; i=i+10) {
            console.log(i);
          } 

          
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will 
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
    console.log('HELP ME!')
    counterFour--;
} 

    //the loop is an infinite loop, because 1 is negaative, it will be true to move forward and minus 1 from 1. Then counterFour becomes 0 which is also less than 2 and will minus 1 from 0 and now one is -1 and it will keep going and never stop

        let counterFour = 1;
        while (counterFour >= -100) {
            console.log('HELP ME!')
            counterFour--;
        }
    

// Exercise 8. Make a variable that contains your favorite integer. Write a loop 
// (your choice which type) that prints the integers from 0 to that number. 
        var fav = '37';
        for (let i=0; i<=37; i++) {
            console.log(i);
            } 
            
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's 
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.

        for (let i=0; i<=100; i++) {
            console.log(i);
            }
            
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

        let number = 37;

        for (let i=0; i<=100; i++) {
        if (i == 37) {
            console.log(i + ' my favorite number!');
        } else {
            console.log(i + ' not my favorite number');
     }
 }

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or 
// doing some research and write down your thoughts in a comment below:
// 
    //if I want to reiterate through numbers and I know the count and how many times I want to interate,I think I would use a forloop

    //if I did not know my conditoons I would probably doa while loop. Like if I am playing a game, while I am gathering a certain coins on a level (do something) but if I dont know how many coins, this loop will run until all the coins are picked up.

    //if I am playing a game and I pass different levels, I might have a function run "congratulations you made it to the next level" so I would run a do while because I only want that function to run while the player is (doing) passing different levels


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; i++) {
  console.log("counting down from", outsideCounter);
     for (let insideCounter = outsideCounter; ???; ???) {
      console.log("inside", ???);
  }
  console.log("***********************************")
}   

        for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
            console.log("counting down from", outsideCounter)
            for (let insideCounter = outsideCounter; insideCounter>0; insideCounter--) {
                console.log("inside", insideCounter);
            }
            console.log("***********************************")
        }


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
//
    //Questions 1-6 was okay, once I understood how a loop works then it became easier. I prefer to white board my loops personally. #7 I defnitely had to white board, to get an understanding to make the loop stop. #9 was hard but I worked it out bymyself and that made me feel good and built my confidence. #11 was weird when I looked at it so I just worked it out step by step. commented out the second look and worked it out that way, then I worked out the second. I will say the way some of the questions are worded gets me confused. But over all it was okay.  

// Email your file to us or commit your file to GitHub and email us a link.
