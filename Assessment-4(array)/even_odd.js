
//Ques

// You are given an array 
// A containing N integer elements, and your task is to return an array B
//  (having a size equal to 2), where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
// Note: You have to complete findEvenOdd function. No need to take any input.



// input format 
// The first line of the input contains an integer N, denoting the number of elements in the array A.The second line of the input contains N space-separated integers, denoting the elements of array A.

// output format 
// Return array B as output.


const even_odd = (n,arr) => {
    let B=[0,0];
    for(let i=0;i<n;i++)
    {
      if(arr[i]%2==0)
      {
        B[0]=B[0]+arr[i]
      }
      else
      {
        B[1]=B[1]+arr[i]
      }
    }
    return B;
}

console.log(even_odd(7,[1,2,3,4,5,6,7]));











