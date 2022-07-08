
// Ques

// Write a program that takes an array as input from the user and find out the product of the elements.

// Note: You have to complete Find_Prod. No need to take any input.


// input format 
// The input contains a single number N, followed by N numbers as array elements.

// output format 
// Return the required answer.


const find_prod = (array , n ) => {
    let prod = 1;
     for(let i=0;i<n;i++)
     {
       prod=prod * array[i];
     }
    return prod;
}

console.log(find_prod([1,2,3,4,5],5));




















