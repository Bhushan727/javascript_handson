
// Ques 

// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

// Note: You have to complete Find_Five. No need to take any input.



// input format 
// The input contains a single number N.

// output format 
// Return the number of fives as the desired output.



function find_5(n) {
    let count = 0;
	 while(n>0)
	 {
	   let temp=0;
	   temp=parseInt(n%10);
	   if(temp==5)
	   {
	     count++;
	   }
	   n=parseInt(n/10);
	 }
	 return(count);
}


console.log(find_5(35415325));














