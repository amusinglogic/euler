/*Longest Collatz sequence
Problem 14
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million. */



var theNum;
var origcount = 0;
//make new var i as a constant we increase
for (var i = 10; i< 1000000; i++){
  var counter = 0,
      n = i; //set n to i since we're manipulating n
//since they all = 1 eventually, loop until we get there, increasing the count for each time we manipulate it
  while (n!==1){
    if (n % 2 !== 0){
      n = (n * 3) + 1;
      counter++;
    }
    if (n % 2 === 0){
      n = n / 2;
      counter++;
    }
    
  } //end while
  //replace theNum if the count is higher than the origcount var.
  if (counter > origcount){
    theNum = i;
    origcount = counter;
  }

}
console.log("Number = " + theNum + " Counter = " + origcount)