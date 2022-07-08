
// Ques 

// Write a program which takes an array as input from the user and find out the sum of the array elements.

// Note: You have to complete Find_Sum. No need to take any input.


// input foemat 
// The input contains a single number N, followed by N numbers as array elements.

// output format 
// Return the required answer.




const find_sum = (array,n) => {
    let sum = 0;
  for(let i=0; i< n;i++)
  {
    sum = sum + array[i];
  }
  return sum;
}


console.log(find_sum([1,2,3,4,5],5));


















