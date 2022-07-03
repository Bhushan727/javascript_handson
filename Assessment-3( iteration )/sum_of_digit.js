
// Ques 

// Write a program that takes a number from the user and get the sum of the digits present in the number.

// Note: You have to complete Number_Sum. No need to take any input.


// input format 
// The input contains a single number N.

// output format 
// Return the sum of the digits of the number.





function sum_of_dig(n) {
    let sum=0;
	while(n>0)
	{
	  sum=sum+parseInt(n%10);
	  n=parseInt(n/10);
	}
	return sum;
}


console.log(sum_of_dig(3254));



















