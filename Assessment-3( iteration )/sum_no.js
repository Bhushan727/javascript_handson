
// Ques 

// You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).

// Note: You have to complete findSum function. No need to take any input.


// input format 
// The first and the only line of the input contains an integer N.


// output format 
// Return the sum of all even integers from 1 upto N (N inclusive).




function sum_nos(n) {
    let sum=0;
    for(let i=1;i<=n;i++)
    {
      if(i%2===0)
      {
        sum=sum+i;
      }
    }
    return(sum);
}


console.log(sum_nos(8));





















