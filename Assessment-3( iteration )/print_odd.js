
// Ques 

// Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.

// Note: You have to complete Print_Odd. No need to take any input.

// input format 
// The input contains a single number N.


// output format 
// Print the desired output.



function print_odd(n) {
    let i=2;
	 console.log(i);
	 while(i<n)
	 {
	   
	   if(i%2===0)
	   {
	     i++;    
	   }
	   console.log(i);
	   i++;
	 }
}


print_odd(15);
























