
// Ques 

// You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18 (18 included).

// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge function. No need to take any input.

// input format 
// The first line of the input contains an integer 
// N
// , denoting the number of person in your locality.
// The second line of the input contains 
// N
//  space-separated integers, denoting the age of persons in your locality.


// output format 
// Return the array containing the age of persons that are over 18 (18 included). 



const high_age = (n,arr) => {
    let B=[];
    for(let i=0,j=0;i<n;i++)
    {
      if(arr[i]>=18)
      {
        B[j]=arr[i];
        j++;
      }
    }
    return B;
}

console.log(high_age(6,[11,23,3,45,72,68]));





