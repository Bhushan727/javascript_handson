
// Ques. 

// Take a number from the user and print the count of digits in that number.

// Note: You have to complete Find_Digits. No need to take any input.


// input format 
// The input contains a single number N.

// output format 
// Return the count of digits in the given number.




function no_of_dig(n) {
    let count=0;
  while(n>0)
  {
    n=parseInt(n/10);
    count++;
  }
  return(count);
}

console.log(no_of_dig(767654));
























