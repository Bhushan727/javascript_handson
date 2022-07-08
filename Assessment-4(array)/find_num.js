
//Ques

// Write a program which takes an array as input from the user and a number.
// Check whether the number is present or not.

// Note: You have to complete Find_Num. No need to take any input.



// input format 
// The first line contains an integer N, denoting the size of the array.The second line contains N space-separated integers, denoting the elements of the array.The third line contains an integer M, denoting the element that needs to be searched.

// output format 
// Return the "YES" (without quotes) else return "NO" (without quotes).



const find_num = (array, n, m) => {
    let i;
    for(i=0;i<n;i++)
    {
      if(m==array[i])
      {
        return "YES";
      }
    }
    if(i==n)
    return "NO";
}


console.log(find_num([1,2,3,4,5],5,2));








