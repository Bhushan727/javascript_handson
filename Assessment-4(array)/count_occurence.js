
//Ques

// You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.

// Note: You have to complete findCount function. No need to take any input.




// input format 
// The first line of the input contains two space-separated integers 
// N and K
// , denoting the number of elements in the array 
// A and the element whose count needs to be determined, respectively.The second line of the input contains N space-separated integers, denoting the elements of the array A.



// output format 
// Return the count of occurrences of K in array A.


const count_occur = (n,k, arr) => {
    let count = 0;
    for(let i=0;i<n;i++)
    {
      if(k==arr[i])
      {
        count++;
      }
    }
    return count;
}

console.log(count_occur(4,3, [3,3,1,2]));




